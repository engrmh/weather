import axios, { AxiosInstance } from "axios";
import toast from "react-hot-toast";

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
      if (error.status === 400) {
        toast.error("City Not Found!!");
      }
      console.log(error.status);

      // return error.response;
    }
    return Promise.reject(error);
  }
);

export default useAxios;
