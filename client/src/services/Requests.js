import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';

const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const createProduct = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestProducts = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const updateProduct = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export const deleteProduct = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};

export default api;
