import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// categores
export const fetchCategories = async () => api.get("/api/categories");

// articles
export const fetchArtilces = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);
