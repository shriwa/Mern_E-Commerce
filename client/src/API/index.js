import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
console.log("Base URL:", BASE_URL);

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth_token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("auth_token")}`;
  }
  return req;
});

export default API;
