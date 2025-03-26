"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { fetchCryptoPrices } from "../features/api/cryptoApi";
import { getCurrentTime } from "../utils/getCurrentTime";

import up from "../../public/icons/up.svg";
import down from "../../public/icons/down.svg";
import Spinner from "./Spinner";
import Link from "next/link";

export default function CryptoList() {
  const [coins, setCoins] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(`${getCurrentTime()}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCryptoPrices();
      console.log(data);
      setCoins(data);
    };

    loadData();

    const refreshInterval = setInterval(() => {
      loadData();
      setSecondsLeft(60);
    }, 60000);

    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatNumberIntl = useCallback(
    (number) => new Intl.NumberFormat("en-US").format(number),
    []
  );

  return (
    <div className="w-8/12 mx-auto pt-8">
      <div className="main_white main_exch">
        <div className="flex justify-between mb-10">
          <h2 className="main_h2">კრიპტოვალუტის კურსები</h2>
          {currentTime === "" ? (
            <Spinner />
          ) : (
            <>
              <p className="main_time ">
                ინფორმაცია განახლდება {secondsLeft} წამში
              </p>
              <p className="main_time pr-7">{currentTime}</p>
            </>
          )}
        </div>
        <div className="flex justify-between text-center pb-5">
          <div className="w-full grid grid-cols-5 gap-8">
            <div className="text-left col-span-2">
              <h3 className="main_h3 pl-5">ვალუტა</h3>
            </div>
            <div>
              <h3 className="main_h3">ოფიციალური</h3>
            </div>
            <div>
              <span className="font-light">24h</span>
            </div>
            <div>
              <h3 className="main_h3">კაპიტალიზაცია</h3>
            </div>
          </div>
        </div>
        {coins.length ? (
          coins.map((coin) => {
            const icon = coin.market_cap_change_percentage_24h < 0 ? down : up;

            return (
              <Link key={coin.id} href={`/crypto/${coin.id.toLowerCase()}`}>
                <div className="flex justify-between text-center my-3">
                  <div className="w-full grid grid-cols-5 gap-8">
                    <div className="text-left col-span-2">
                      <div className="flex gap-8 main_prices">
                        {coin.market_cap_rank}
                        <Image
                          src={coin.image}
                          alt={coin.name}
                          width="24"
                          height="24"
                        />
                        <p className="my-auto">
                          {coin.name} ({coin.symbol.toUpperCase()})
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center my-auto main_prices">
                      <span>${coin.current_price}</span>
                    </div>
                    <div className="my-auto main_prices flex justify-center">
                      <span className="my-auto px-3">
                        <Image src={icon} alt="change" />
                      </span>
                      {coin.market_cap_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="my-auto main_prices">
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
