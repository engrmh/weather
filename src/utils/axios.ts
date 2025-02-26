import axios, { AxiosInstance } from "axios";

const baseURL = "/api/v1/";

const useAxios: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor برای درخواست‌ها
useAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor برای پاسخ‌ها
useAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return error.response;
    }
    return Promise.reject(error);
  }
);

export default useAxios;
