import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message } from '@arco-design/web-vue';

export interface HttpResponse<T = unknown> {
  code: number;
  msg: string;
  data: T;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    return response.data;
  },
  (error) => {
    const msg = error.message || 'Request Error';
    Message.error({ content: msg, duration: 5 * 1000 });
    return { code: -1, msg, data: null };
  },
);
