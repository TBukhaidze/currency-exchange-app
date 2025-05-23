import axios from "axios";

const BASE_URL =
  "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json/";

export const fetchCurrencyPrice = async (date) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { date },
    });

    if (!response.data || response.data.length === 0) {
      throw new Error("No data received from API");
    }

    return response.data;
  } catch (error) {
    console.error("Error while receiving data:", error);
    throw error;
  }
};
