// src/service/api.ts
import axios from "axios";
import { useAuthStore } from "../store/authStore";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
  timeout: 15000,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken; // <-- THE CORRECT WAY

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If needed, handle refresh-token flow here
    // Example:
    // if (error.response?.status === 401) logout();
    return Promise.reject(error);
  }
);

export default api;
