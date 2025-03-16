const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

export const fetchCryptoPrices = async () => {
  try {
    const response = await fetch(
      `${API_URL}?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
    );
    if (!response.ok) throw new Error("Error data");
    return await response.json();
  } catch (error) {
    console.error("Error while receiving data:", error);
    return [];
  }
};

