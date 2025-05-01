import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Update if needed
});

export default api;
