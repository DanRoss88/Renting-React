import axios from "axios";

export const fetchApiKey = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/map");
    const { apiKey } = response.data;
    return apiKey;
  } catch (err) {
    console.log("Error fetching API key:", err);
    return null;
  }
};