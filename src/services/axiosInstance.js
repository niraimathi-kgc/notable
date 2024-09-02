// src/services/axiosInstance.js
import axios from 'axios';
import { refreshToken, getAuthHeader } from './auth';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

instance.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await refreshToken();
        return instance(originalRequest);
      } catch (e) {
        console.error('Token refresh failed:', e);
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
