import axios from 'axios';

// api.js
const api = axios.create({
    baseURL: 'http://localhost:3002/api/students/',
});

export default api;