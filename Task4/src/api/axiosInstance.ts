import axios, { AxiosInstance } from "axios";

const { baseURL } = process.env;

export const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
