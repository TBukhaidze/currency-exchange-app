import Image from "next/image";

import React, { useEffect, useState } from "react";

import { fetchCurrencyPrice } from "../features/api/currencyApi";
import { getCurrentTime } from "../utils/getCurrentTime";

import Spinner from "./Spinner";

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

import toggle from "../../public/icons/toggle.svg";
import info from "../../public/icons/info.svg";

const CurrencyList = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [selectedCurrency1, setSelectedCurrency1] = useState("GEL");
  const [selectedCurrency2, setSelectedCurrency2] = useState("USD");

  const flags = [usa, eur, rus, tr, uk, che, azr, arm, isr, pol];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(`${getCurrentTime()}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const selectedRate1 =
    data?.[0]?.currencies?.find((c) => c.code === selectedCurrency1)?.rate || 1;
  const selectedRate2 =
    data?.[0]?.currencies?.find((c) => c.code === selectedCurrency2)?.rate || 1;

  const exchangeRate = (selectedRate1 / selectedRate2).toFixed(4);

  return (
    <>
      <div className="main_white main_exch w-7/12">
        {loading && (
          <div className="h-60 flex justify-center col-span-5">
            <div className="loader" />
          </div>
        )}
        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
        <div className="flex justify-between  mb-10">
          <h2 className="main_h2">ვალუტის კურსები</h2>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded-md mb-2"
          />
          {currentTime == "" ? (
            <Spinner />
          ) : (
            <p className="main_time">{currentTime}</p>
          )}
        </div>

        <div className="flex justify-between text-center">
          <div className="w-full grid grid-cols-5 gap-8">
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
                          <Image
                            src={currency.diff < 0 ? down : up}
                            alt="up/down"
                          />
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
          </div>
        </div>
      </div>

      <div className="main_white main_exch w-2/5 ml-6 h-full">
        <h2 className="calc_h2 mb-10">კალკულატორი</h2>
        <p className="calc_p">მსურს გავყიდო</p>
        <div className="w-full flex calc_div justify-between">
          <input className="calc_input w-full" type="text" placeholder="0.00" />
          <div className="flex mr-2">
            <select
              className="calc_select select_text text-right pr-2 max-w-48"
              value={selectedCurrency1}
              onChange={(e) => setSelectedCurrency1(e.target.value)}
            >
              <option value="GEL">1 ლარი</option>
              {data &&
                getFilteredCurrencies(data[0]?.currencies || []).map(
                  (currency) =>
                    currency.code !== "GEL" ? (
                      <option key={currency.code} value={currency.code}>
                        {currency.quantity} {currency.name}
                      </option>
                    ) : null
                )}
            </select>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <button
            className="calc_toggle"
            onClick={() => {
              setSelectedCurrency1(selectedCurrency2);
              setSelectedCurrency2(selectedCurrency1);
            }}
          >
            <Image src={toggle} alt="toggle" />
          </button>
        </div>

        <p className="calc_p">მსურს ვიყიდო</p>
        <div className="w-full flex calc_div justify-between">
          <input className="calc_input w-full" type="text" placeholder="0.00" />
          <div className="flex mr-2">
            <select
              className="calc_select select_text text-right pr-2 max-w-48"
              value={selectedCurrency2}
              onChange={(e) => setSelectedCurrency2(e.target.value)}
            >
              <option value="USD">1 დოლარი</option>
              <option value="GEL">1 ლარი</option>
              {data &&
                getFilteredCurrencies(data[0]?.currencies || []).map(
                  (currency) =>
                    currency.code !== "USD" && currency.code !== "GEL" ? (
                      <option key={currency.code} value={currency.code}>
                        {currency.quantity} {currency.name}
                      </option>
                    ) : null
                )}
            </select>
          </div>
        </div>
        <div className="mt-6">
          <span className="calc_span">
            {data?.[0]?.currencies?.find((c) => c.code === selectedCurrency1)
              ?.quantity || 1}{" "}
            {selectedCurrency1} = {exchangeRate} {selectedCurrency2}
          </span>
          <div className="flex mt-6">
            <Image src={info} alt="info" />
            <div>
              <p className="calc_p">
                გაითვალისწინეთ, გაცვლითი კურსი ფილიალის მიხედვით შესაძლებელია
                განსხვავდებოდეს. ინფორმაციის მისაღებად, მიმართეთ თქვენთვის
                სასურველ ფილიალს.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyList;
