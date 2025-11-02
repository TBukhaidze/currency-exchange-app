import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { fetchCurrencyPrice } from "../features/api/currencyApi";
import { getCurrentTime } from "../utils/getCurrentTime";
import { LanguageContext } from "../context/LanguageContext";

import { currencyFlags } from "../features/constants/currencyFlags";
import { targetCurrencies } from "../features/constants/targetCurrencies";
import { icons } from "../features/constants/icons";

import Spinner from "./Spinner";

const CurrencyList = () => {
  const { translations } = useContext(LanguageContext);
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [selectedCurrency1, setSelectedCurrency1] = useState("GEL");
  const [selectedCurrency2, setSelectedCurrency2] = useState("USD");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const getCurrencyDisplayName = (code, name = "") =>
    translations.currencyName?.[code] || name?.trim().split(" ").pop() || code;

  const findRate = (code) =>
    data?.[0]?.currencies?.find((c) => c.code === code)?.rate || 1;

  const getQuantity = (code) =>
    data?.[0]?.currencies?.find((c) => c.code === code)?.quantity || 1;

  const getFilteredCurrencies = (currencies) =>
    currencies
      .filter((c) => targetCurrencies.includes(c.code))
      .sort(
        (a, b) =>
          targetCurrencies.indexOf(a.code) - targetCurrencies.indexOf(b.code)
      );

  const renderCurrencyOptions = (excludeCodes = []) =>
    getFilteredCurrencies(data?.[0]?.currencies || []).map((currency) =>
      excludeCodes.includes(currency.code) ? null : (
        <option key={currency.code} value={currency.code}>
          {currency.quantity}{" "}
          {getCurrencyDisplayName(currency.code, currency.name)}
        </option>
      )
    );

  const renderCurrencyRow = (currency) => (
    <React.Fragment key={currency.code}>
      <div className="text-left col-span-2">
        <div className="flex gap-8 main_prices">
          <Image
            src={currencyFlags[currency.code]}
            alt={`${currency.code} flag`}
          />
          <p className="my-auto">
            {currency.quantity}{" "}
            {getCurrencyDisplayName(currency.code, currency.name)}
          </p>
        </div>
      </div>
      <div className="flex text-left my-auto main_prices">
        <span>{currency.rate}</span>
        <span className="my-auto px-3">
          <Image
            src={currency.diff < 0 ? icons.down : icons.up}
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
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
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
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [date]);

  useEffect(() => {
    const rate1 = findRate(selectedCurrency1);
    const rate2 = findRate(selectedCurrency2);

    if (!isNaN(parseFloat(amount)) && isFinite(amount)) {
      const result = (parseFloat(amount) * (rate1 / rate2)).toFixed(4);
      setConvertedAmount(result);
    } else {
      setConvertedAmount("");
    }
  }, [amount, selectedCurrency1, selectedCurrency2, data]);

  const exchangeRate = (
    findRate(selectedCurrency1) / findRate(selectedCurrency2)
  ).toFixed(4);

  return (
    <div className="lg:w-8/12 md:w-11/12 w-full mx-auto pt-8 flex flex-col lg:flex-row">
      <div className="main_white main_exch w-full lg:w-2/5 lg:ml-6 h-auto self-start order-1 lg:order-2 mb-10 lg:mb-0">
        <h2 className="calc_h2 mb-10">
          {translations.currency?.calculator || "კალკულატორი"}
        </h2>
        <p className="calc_p">
          {translations.currency?.i_want_to_sell || "მსურს გავყიდო"}
        </p>
        <div className="w-full flex calc_div justify-between">
          <input
            className="calc_input w-full"
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex mr-2">
            <select
              className="calc_select select_text text-right pr-2 max-w-36"
              value={selectedCurrency1}
              onChange={(e) => setSelectedCurrency1(e.target.value)}
            >
              <option value="GEL">1 {getCurrencyDisplayName("GEL")}</option>
              {renderCurrencyOptions(["GEL"])}
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
            <Image src={icons.toggle} alt="toggle" />
          </button>
        </div>

        <p className="calc_p">
          {translations.currency?.i_want_to_buy || "მსურს ვიყიდო"}
        </p>
        <div className="w-full flex calc_div justify-between">
          <input
            className="calc_input w-full"
            type="text"
            placeholder="0.00"
            value={convertedAmount}
            readOnly
          />
          <div className="flex mr-2">
            <select
              className="calc_select select_text text-right pr-2 max-w-36"
              value={selectedCurrency2}
              onChange={(e) => setSelectedCurrency2(e.target.value)}
            >
              <option value="USD">1 {getCurrencyDisplayName("USD")}</option>
              <option value="GEL">1 {getCurrencyDisplayName("GEL")}</option>
              {renderCurrencyOptions(["USD", "GEL"])}
            </select>
          </div>
        </div>

        <div className="mt-6">
          <span className="calc_span">
            {getQuantity(selectedCurrency1)} {selectedCurrency1} ={" "}
            {exchangeRate} {selectedCurrency2}
          </span>
          <div className="flex mt-6">
            <Image src={icons.info} alt="info" />
            <div>
              <p className="calc_p">
                {translations.currency?.disclaimer ||
                  "გაითვალისწინეთ, გაცვლითი კურსი ფილიალის მიხედვით შესაძლებელია განსხვავდებოდეს. ინფორმაციის მისაღებად, მიმართეთ თქვენთვის სასურველ ფილიალს."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main_white main_exch w-full lg:w-7/12 order-2 lg:order-1">
        {loading && (
          <div className="h-60 flex justify-center col-span-5">
            <div className="loader" />
          </div>
        )}
        {error && <p className="text-red-500 mt-2">Error: {error}</p>}

        <div className="flex justify-between mb-10 flex-wrap">
          <h2 className="main_h2">
            {translations.currency?.rates_title || "ვალუტის კურსები"}
          </h2>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded-md mb-2"
          />
          {!currentTime ? (
            <Spinner />
          ) : (
            <p className="main_time">{currentTime}</p>
          )}
        </div>

        <div className="flex justify-between text-center">
          <div className="w-full grid grid-cols-5 gap-8">
            <div className="text-left col-span-2">
              <h3 className="main_h3">
                {translations.currency?.currency || "ვალუტა"}
              </h3>
            </div>
            <div>
              <h3 className="main_h3">
                {translations.currency?.official || "ოფიც."}
              </h3>
            </div>
            <div>
              <h3 className="main_h3">
                {translations.currency?.buy || "ყიდვა"}
              </h3>
            </div>
            <div>
              <h3 className="main_h3">
                {translations.currency?.sell || "გაყიდვა"}
              </h3>
            </div>

            {data &&
              getFilteredCurrencies(data[0]?.currencies || []).map(
                renderCurrencyRow
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyList;
