import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins";

export const fetchCryptoDetails = async (coinId) => {
  try {
    const response = await axios.get(`${API_URL}/${coinId}`);
    return response.data;
  } catch (error) {
    console.error("Error while receiving data:", error);
    return null;
  }
};
