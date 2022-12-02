import axiosRetry from "axios-retry";
import axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse, Method } from "axios";

export interface Response<T> {
  data: T;
  code: number | string;
  msg: string;
}
export type PaResponse<T = any> = Promise<Response<T>>;

const axiosInstance = axios.create({
  timeout: 6000,
});

axios.interceptors.request.use((config) => {
  // 请求拦截
  return config;
});

axios.interceptors.response.use(
  (config) => {
    // 响应拦截 返回一个Promise.resolve后继续执行
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axiosRetry(axiosInstance, {
  retries: 3,
  shouldResetTimeout: true,
  retryDelay: (retryCount: number) => {
    return retryCount * 1000;
  },
  retryCondition(error: AxiosError) {
    if (error.message.includes("timeout")) {
      return true;
    }
    return !error.response || error.response.status !== 401;
  },
});

const request = {
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): PaResponse<T> => {
    return axiosInstance.post(url, data, config);
  },
  get: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): PaResponse<T> => {
    return axiosInstance.get(url, { params: data, ...config });
  },
  postWithLog: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): PaResponse<T> => {
    return axiosInstance.post(url, data, config);
  },
  getWithLog: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): PaResponse<T> => {
    return axiosInstance.post(url, data, config);
  },
};

export default request;
