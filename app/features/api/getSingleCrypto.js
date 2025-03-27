import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

export const fetchSingleCryptoDetails = async (coinId) => {
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

    const coinData = response.data.find((coin) => coin.id === coinId);

    return coinData || null;
  } catch (error) {
    console.error("Error while receiving data:", error);
    return null;
  }
};
