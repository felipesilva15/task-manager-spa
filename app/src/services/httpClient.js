import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3050/api",
});

api.interceptors.request.use(async config => {
    api.defaults.headers.contentType = `application/json`;
});

export default api;