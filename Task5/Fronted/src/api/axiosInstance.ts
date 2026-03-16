import axios from "axios";
import { get } from "lodash/fp";

const { VITE_BASE_URL } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    // Because their API forces me to
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((response) => get("data", response));
