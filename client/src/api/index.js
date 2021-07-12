import axios from 'axios';

axios.defaults.withCredentials = true;
const API = axios.create({ baseURL: process.env.REACT_APP_ENV === "production" ? process.env.REACT_APP_HOST_URL : "http://localhost:5000" });


export const applyJob = (formData) => API.post('/api/applyJob', formData);
export const sendMail = (formData) => API.post('/api/sendMail', formData);