import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

export const fetchCryptoPrices = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while receiving data:", error);
    return [];
  }
};
