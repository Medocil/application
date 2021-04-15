import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://10.0.2.2:8000/api/',
    withCredentials: true,
});

export default apiClient;