import axios from "axios";
import { get, set } from "lodash/fp";

const { VITE_BASE_URL } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    // Because their API forces me to
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "Content-Type": "application/json",
  },
});

export const updateToken = (token: string): void => {
  api.interceptors.request.use(set("headers.Authorization", `Bearer ${token}`));
};

api.interceptors.response.use(get("data"));
