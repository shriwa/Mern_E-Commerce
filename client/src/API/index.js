import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log("Base URL:", BASE_URL);

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("utoken")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("utoken")}`;
  }
  return req;
});

export default API;
