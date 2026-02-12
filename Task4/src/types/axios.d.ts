import "axios";

declare module "axios" {
  interface AxiosResponse<T = any> {
    data: T; 
  }

  interface AxiosInstance {
    get<T = any, R = T>(url: string, config?: any): Promise<R>;
    post<T = any, R = T>(url: string, data?: any, config?: any): Promise<R>;
    put<T = any, R = T>(url: string, data?: any, config?: any): Promise<R>;
    delete<T = any, R = T>(url: string, config?: any): Promise<R>;
  }
}
