import axios from "axios";

console.log(import.meta.env.VITE_API_URL_DEV);

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_DEV,
  headers: {
    "Content-Type": "application/json",
  },
});
