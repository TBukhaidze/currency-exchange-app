import axios from "axios";

export const fetchCryptoChart = async (coinId, days = 365) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
      {
        params: { vs_currency: "usd", days, interval: "daily" },
      }
    );
    return response.data.prices;
  } catch (error) {
    console.error("Error while receiving data", error);
    return [];
  }
};
