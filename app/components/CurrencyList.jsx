import Image from "next/image";

import React, { useEffect, useState } from "react";

import { fetchCurrencyPrice } from "../features/api/currencyApi";

import up from "../../public/icons/up.svg";
import down from "../../public/icons/down.svg";

import usa from "../../public/icons/usa.svg";
import eur from "../../public/icons/eur.svg";
import rus from "../../public/icons/rus.svg";
import tr from "../../public/icons/tr.svg";
import uk from "../../public/icons/uk.svg";
import che from "../../public/icons/che.svg";
import azr from "../../public/icons/azr.svg";
import arm from "../../public/icons/arm.svg";
import isr from "../../public/icons/isr.svg";
import pol from "../../public/icons/pol.svg";

const CurrencyList = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const flags = [usa, eur, rus, tr, uk, che, azr, arm, isr, pol];

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

  const targetCurrencies = [
    "USD",
    "EUR",
    "RUB",
    "TRY",
    "GBP",
    "CHF",
    "AZN",
    "AMD",
    "ILS",
    "PLN",
  ];

  const getFilteredCurrencies = (currencies) => {
    return currencies
      .filter((currency) => targetCurrencies.includes(currency.code))
      .sort(
        (a, b) =>
          targetCurrencies.indexOf(a.code) - targetCurrencies.indexOf(b.code)
      );
  };

  return (
    <>
      {loading && (
        <div className="h-60 flex justify-center col-span-5">
          <div className="loader" />
        </div>
      )}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      <div className="text-left col-span-2">
        <h3 className="main_h3">ვალუტა</h3>
      </div>
      <div>
        <h3 className="main_h3">ოფიციალური</h3>
      </div>
      <div>
        <h3 className="main_h3">ყიდვა</h3>
      </div>
      <div>
        <h3 className="main_h3">გაყიდვა</h3>
      </div>
      {data && (
        <>
          {getFilteredCurrencies(data[0]?.currencies || []).map(
            (currency, index) => (
              <React.Fragment key={currency.code}>
                <div key={currency.code} className="text-left col-span-2">
                  <div className="flex gap-8 main_prices">
                    <Image src={flags[index]} alt="usaIcon" />
                    <p className="my-auto">
                      {currency.quantity} {currency.name}
                    </p>
                  </div>
                </div>
                <div className="flex text-left my-auto main_prices">
                  <span>{currency.rate}</span>
                  <span className="my-auto px-3">
                    <Image src={currency.diff < 0 ? down : up} alt="up/down" />
                  </span>
                </div>
                <div className="my-auto main_prices">
                  {(currency.rate * 0.99).toFixed(4)}
                </div>
                <div className="my-auto main_prices">
                  {(currency.rate * 1.01).toFixed(4)}
                </div>
              </React.Fragment>
            )
          )}
        </>
      )}
    </>
  );
};

export default CurrencyList;
