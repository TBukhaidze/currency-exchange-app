import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

interface FetchParams {
  vs_currency: string;
  order: string;
  per_page: number;
  page: number;
  sparkline: boolean;
}

export const fetchCryptoPrices = async () => {
  const params: FetchParams = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 25,
    page: 1,
    sparkline: false,
  };

  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Error while receiving data:", error);
    return [];
  }
};
