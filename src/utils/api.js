import axios from 'axios';
import { BASE_URL } from '@constants/config';

const apiInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default apiInstance;
