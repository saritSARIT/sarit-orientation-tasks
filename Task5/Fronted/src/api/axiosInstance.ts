import axios from "axios";
import { get } from "lodash/fp";

const { VITE_BASE_URL } = import.meta.env;

let authToken: string | null = null;

export const updateToken = (token: string | null) => {
  authToken = token;

  token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
};

export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    // Because their API forces me to
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "Content-Type": "application/json",
  },
});

authToken = localStorage.getItem("token");

api.interceptors.request.use((config) => {

  authToken??config.headers.Authorization = `Bearer ${authToken}`;

  return config;
});

api.interceptors.response.use((response) => get("data", response));
