import "axios";
import type { AxiosRequestConfig } from "axios";

declare module "axios" {
 
  interface AxiosInstance {
    get<TResponse = unknown>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<TResponse>;

    delete<TResponse = unknown>(
      url: string,
      config?: AxiosRequestConfig,
    ): Promise<TResponse>;

    post<TResponse = unknown, TRequest = unknown>(
      url: string,
      data?: TRequest,
      config?: AxiosRequestConfig,
    ): Promise<TResponse>;

    put<TResponse = unknown, TRequest = unknown>(
      url: string,
      data?: TRequest,
      config?: AxiosRequestConfig,
    ): Promise<TResponse>;
  }
}
