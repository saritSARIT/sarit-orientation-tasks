import axios from "axios";
import { get } from "lodash/fp";

const { VITE_BASE_URL } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return get("data", response);
  },
  (error) => Promise.reject(error),
);
