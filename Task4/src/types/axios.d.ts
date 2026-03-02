import type { AxiosRequestConfig } from "axios";

declare module "axios" {
  interface AxiosInstance {
    get: <TResponse = unknown>(
      url: string,
      config?: AxiosRequestConfig,
    ) => Promise<TResponse>;

    delete: <TResponse = unknown>(
      url: string,
      config?: AxiosRequestConfig,
    ) => Promise<TResponse>;

    post: <TResponse = unknown>(
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig,
    ) => Promise<TResponse>;

    put: <TResponse = unknown>(
      url: string,
      data?: unknown,
      config?: AxiosRequestConfig,
    ) => Promise<TResponse>;
  }
}