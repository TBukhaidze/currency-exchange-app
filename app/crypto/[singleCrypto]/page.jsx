"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Image from "next/image";

import CryptoChart from "../../components/CryptoChar";
import { fetchSingleCryptoDetails } from "@/app/features/api/getSingleCrypto";

const SingleCrypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const params = useParams();

  const coinId = params.singleCrypto;

  useEffect(() => {
    if (!coinId) return;
    const getCryptoData = async () => {
      const data = await fetchSingleCryptoDetails(coinId);
      console.log(data);
      setCryptoData(data);
    };

    getCryptoData();
  }, [coinId]);

  const formatNumberIntl = useCallback(
    (number) => new Intl.NumberFormat("en-US").format(number),
    []
  );

  return (
    <div className="main pb-8">
      <div className="w-8/12 mx-auto pt-8">
        <div className="main_white main_exch">
          {cryptoData ? (
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center flex justify-center">
                <p className="flex my-auto pr-2">
                  <Image
                    src={cryptoData.image}
                    alt={cryptoData.name}
                    width="24"
                    height="24"
                  />
                </p>
                {cryptoData.name}
                <p className="pl-2 text-[#666a7a]">
                  #{cryptoData.market_cap_rank}
                </p>
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Market Cap</p>
                  <p className="text-lg font-semibold text-gray-800">
                    ${formatNumberIntl(cryptoData.market_cap)}
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">24h Trading Volume</p>
                  <p className="text-lg font-semibold text-gray-800">
                    ${formatNumberIntl(cryptoData.total_volume)}
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Circulating Supply</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatNumberIntl(cryptoData.circulating_supply)}
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Total Supply</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatNumberIntl(cryptoData.total_supply) || "N/A"}
                  </p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">Max Supply</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatNumberIntl(cryptoData.max_supply) || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-60 flex justify-center">
              <div className="loader" />
            </div>
          )}
          <div className="mt-5">
            <CryptoChart coinId={coinId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCrypto;
