"use client";

import { useEffect, useState } from "react";
import { fetchCryptoPrices } from "../features/api/cryptoApi";

import Image from "next/image";

import up from "../../public/icons/up.svg";
import down from "../../public/icons/down.svg";

export default function CryptoList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCryptoPrices();
      console.log(data);
      setCoins(data);
    };

    loadData();

    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, []);

  let num = 1;

  return (
    <div className="w-8/12 mx-auto pt-8 ">
      <div className="main_white main_exch">
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
        {coins.map((coin) => {
          const icon = coin.market_cap_change_percentage_24h < 0 ? down : up;

          return (
            <div key={coin.id}>
              <div className="flex justify-between text-center my-3">
                <div className="w-full grid grid-cols-5 gap-8">
                  <div className="text-left col-span-2">
                    <div className="flex gap-8 main_prices">
                      {num++}
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
                    <span>{coin.current_price}</span>
                  </div>
                  <div className="my-auto main_prices flex justify-center">
                    <span className="my-auto px-3">
                      <Image src={icon} alt="change" />
                    </span>
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </div>
                  <div className="my-auto main_prices">${coin.market_cap}</div>
                </div>
              </div>
              <div className="p-4 border-t mx-8" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
