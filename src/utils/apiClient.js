import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;