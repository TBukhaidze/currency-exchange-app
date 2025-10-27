import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

interface FetchParams {
  vs_currency: string;
  order: string;
  per_page: number;
  page: number;
  sparkline: boolean;
}

export const fetchSingleCryptoDetails = async (
  coinId: string
): Promise<any | null> => {
  const params: FetchParams = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 25,
    page: 1,
    sparkline: false,
  };

  try {
    const response = await axios.get<any[]>(API_URL, { params });

    const coinData = response.data.find((coin) => coin.id === coinId);

    return coinData || null;
  } catch (error) {
    console.error("Error while receiving data:", error);
    return null;
  }
};
