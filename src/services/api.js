import axios from 'axios';
import { getAuthHeader } from './auth';

const API_URL = 'http://localhost:8000/api/';

export const getNotes = () => axios.get(`${API_URL}notes/`, {
  headers: getAuthHeader()
});

export const getNoteById = (id) => axios.get(`${API_URL}notes/${id}/`, {
  headers: getAuthHeader()
});

export const createNote = (note) => axios.post(`${API_URL}notes/`, note, {
  headers: getAuthHeader()
});

export const updateNote = (id, note) => axios.put(`${API_URL}notes/${id}/`, note, {
  headers: getAuthHeader()
});
