import axios from 'axios';
import localStorage from '../helpers/localStorage';
import { API_URL } from './api-url';

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const clientAxios = axios.create(defaultOptions);

clientAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token || '';
  return config;
});

export default clientAxios;
