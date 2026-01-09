import axios from "axios";

export const api = axios.create({
  baseURL: "/api",   // we will proxy this to backend
  timeout: 15000,
});
