"use client";

import { useEffect, useState } from "react";
import { fetchCurrencyPrice } from "../features/api/currencyApi";

const Currency = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchCurrencyPrice(date);
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [date]);

  return (
    <div className="p-4 border rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">ვალუტის კურსი</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded-md mb-2 w-full"
      />

      {loading && (
        <div className="h-60 flex justify-center">
          <div className="loader" />
        </div>
      )}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}

      {data && (
        <div className="mt-4">
          {data[0]?.currencies?.map((currency) => (
            <div key={currency.code} className="border p-2 rounded-md mb-2">
              <p>
                <strong>{currency.code}</strong>: {currency.rate} GEL
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Currency;
