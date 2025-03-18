import axios from "axios";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1/search";

export const fetchPhotos = async (query, orientation = "landscape", perPage = 20) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { query, per_page: perPage, orientation },
      headers: { Authorization: API_KEY },
    });
    return response.data.photos;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};