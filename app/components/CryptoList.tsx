"use client";

import { useCallback, useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { LanguageContext } from "../context/LanguageContext";
import { fetchCryptoPrices } from "../features/api/cryptoApi";
import { getCurrentTime } from "../utils/getCurrentTime";

import { icons } from "../features/constants/icons";
import Spinner from "./Spinner";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  market_cap_change_percentage_24h: number | null;
}

interface ICryptoTranslations {
  rates_title?: string;
  currency?: string;
  price?: string;
  market_cap?: string;
  refresh_info?: string;
}

interface ITranslations {
  crypto?: ICryptoTranslations;
}

export default function CryptoList() {
  const { translations } = useContext(LanguageContext) as {
    translations: ITranslations;
  };

  const [coins, setCoins] = useState<ICoin[]>([]);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [secondsLeft, setSecondsLeft] = useState<number>(60);

  /* --- TIME --- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* --- FETCH COINS --- */
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCryptoPrices();
      setCoins(data);
    };

    loadData();

    const refreshInterval = setInterval(() => {
      loadData();
      setSecondsLeft(60);
    }, 60000);

    return () => clearInterval(refreshInterval);
  }, []);

  /* --- COUNTDOWN --- */
  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  /* --- FORMAT --- */
  const formatNumberIntl = useCallback(
    (num: number) => new Intl.NumberFormat("en-US").format(num),
    []
  );

  return (
    <div className="lg:w-8/12 md:w-11/12 w-full mx-auto pt-8">
      <div className="main_white main_exch">
        <div className="lg:flex lg:justify-between mb-10 text-center">
          <h2 className="main_h2">
            {translations.crypto?.rates_title || "კრიპტოვალუტის კურსები"}
          </h2>

          {currentTime === "" ? (
            <Spinner />
          ) : (
            <>
              <p className="main_time">
                {(
                  translations.crypto?.refresh_info ||
                  "ინფორმაცია განახლდება {seconds} წამში"
                ).replace("{seconds}", String(secondsLeft))}
              </p>
              <p className="main_time pr-7">{currentTime}</p>
            </>
          )}
        </div>

        <div className="flex justify-between text-center pb-5">
          <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8">
            <div className="text-left col-span-2">
              <h3 className="main_h3 pl-5">
                {translations.crypto?.currency || "ვალუტა"}
              </h3>
            </div>
            <div>
              <h3 className="main_h3">
                {translations.crypto?.price || "ფასი"}
              </h3>
            </div>
            <div className="hidden sm:block">
              <span className="font-light">24h</span>
            </div>
            <div className="hidden sm:block">
              <h3 className="main_h3">
                {translations.crypto?.market_cap || "კაპიტალიზაცია"}
              </h3>
            </div>
          </div>
        </div>

        {coins.length ? (
          coins.map((coin) => {
            const icon =
              (coin.market_cap_change_percentage_24h ?? 0) < 0
                ? icons.down
                : icons.up;

            const changeText =
              coin.market_cap_change_percentage_24h != null
                ? coin.market_cap_change_percentage_24h.toFixed(2) + "%"
                : "N/A";

            return (
              <Link key={coin.id} href={`/crypto/${coin.id.toLowerCase()}`}>
                <div className="flex justify-between text-center my-3">
                  <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8">
                    <div className="text-left col-span-2">
                      <div className="flex gap-4 main_prices">
                        {coin.market_cap_rank}
                        <Image
                          src={coin.image}
                          alt={coin.name}
                          width={24}
                          height={24}
                        />
                        <p className="my-auto">
                          {coin.name} ({coin.symbol.toUpperCase()})
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center my-auto main_prices">
                      <span>${formatNumberIntl(coin.current_price)}</span>
                    </div>

                    <div className="hidden sm:flex my-auto main_prices justify-center">
                      <span className="my-auto px-2">
                        <Image src={icon} alt="change" />
                      </span>
                      {changeText}
                    </div>

                    <div className="hidden sm:block main_prices overflow-hidden truncate whitespace-nowrap">
                      ${formatNumberIntl(coin.market_cap)}
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t mx-8" />
              </Link>
            );
          })
        ) : (
          <div className="h-60 flex justify-center">
            <div className="loader" />
          </div>
        )}
      </div>
    </div>
  );
}
