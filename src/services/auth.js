import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}token/`, { username, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');
  if (!refreshToken) throw new Error('No refresh token found');

  try {
    const response = await axios.post(`${API_URL}token/refresh/`, { refresh: refreshToken });
    localStorage.setItem('access_token', response.data.access);
    return response.data;
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};
