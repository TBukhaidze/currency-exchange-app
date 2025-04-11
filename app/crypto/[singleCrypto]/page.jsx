"use client";

import { useCallback, useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { LanguageContext } from "../../context/LanguageContext";
import CryptoChart from "../../components/CryptoChar";
import { fetchSingleCryptoDetails } from "@/app/features/api/getSingleCrypto";
import up from "../../../public/icons/up.svg";
import down from "../../../public/icons/down.svg";

const SingleCrypto = () => {
  const { translations } = useContext(LanguageContext);
  const [cryptoData, setCryptoData] = useState(null);
  const params = useParams();
  const coinId = params.singleCrypto;

  useEffect(() => {
    if (!coinId) return;
    const getCryptoData = async () => {
      const data = await fetchSingleCryptoDetails(coinId);
      setCryptoData(data);
    };
    getCryptoData();
  }, [coinId]);

  const formatNumberIntl = useCallback(
    (number) => new Intl.NumberFormat("en-US").format(number),
    []
  );

  return (
    <div className="main pb-8 flex justify-center">
      <div className="lg:w-8/12 md:w-11/12 w-full  pt-8">
        <div className="main_white main_exch">
          {cryptoData ? (
            <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 mt-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center flex flex-wrap justify-center items-center gap-2">
                <Image
                  src={cryptoData.image}
                  alt={cryptoData.name}
                  width="24"
                  height="24"
                />
                {cryptoData.name}
                <span className="text-[#9c9ea7] font-light">
                  ({cryptoData.symbol})
                </span>
                <span className="text-[#666a7a]">
                  #{cryptoData.market_cap_rank}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {[
                  {
                    label:
                      translations.cryptoDetail?.current_price ||
                      "Current Price",
                    value: `$${formatNumberIntl(cryptoData.current_price)}`,
                  },
                  {
                    label:
                      translations.cryptoDetail?.price_change_24h ||
                      "24h Change",
                    value: (
                      <span className="flex items-center">
                        <Image
                          src={
                            cryptoData.market_cap_change_percentage_24h > 0
                              ? up
                              : down
                          }
                          alt="change"
                          className="mr-2"
                        />
                        {formatNumberIntl(
                          Math.abs(cryptoData.market_cap_change_percentage_24h)
                        )}
                        %
                      </span>
                    ),
                  },
                  {
                    label:
                      translations.cryptoDetail?.market_cap || "Market Cap",
                    value: `$${formatNumberIntl(cryptoData.market_cap)}`,
                  },
                  {
                    label:
                      translations.cryptoDetail?.volume_24h || "24h Volume",
                    value: `$${formatNumberIntl(cryptoData.total_volume)}`,
                  },
                  {
                    label: translations.cryptoDetail?.ath || "All Time High",
                    value: `$${formatNumberIntl(cryptoData.ath)}`,
                  },
                  {
                    label:
                      translations.cryptoDetail?.circulating_supply ||
                      "Circulating Supply",
                    value: formatNumberIntl(cryptoData.circulating_supply),
                  },
                  {
                    label:
                      translations.cryptoDetail?.total_supply || "Total Supply",
                    value: formatNumberIntl(cryptoData.total_supply) || "N/A",
                  },
                  {
                    label:
                      translations.cryptoDetail?.max_supply || "Max Supply",
                    value: formatNumberIntl(cryptoData.max_supply) || "N/A",
                  },
                  {
                    label:
                      translations.cryptoDetail?.price_range_24h || "24h Range",
                    value: `$${formatNumberIntl(
                      cryptoData.low_24h
                    )} - $${formatNumberIntl(cryptoData.high_24h)}`,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-100 rounded-lg shadow flex flex-col justify-center"
                  >
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-60 flex justify-center">
              <div className="loader" />
            </div>
          )}

          <div className="mt-5">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center py-3">
              {cryptoData ? cryptoData.name : coinId}{" "}
              {translations.cryptoDetail?.chart || "Chart"}
            </h2>
            <p className="pl-2 text-[#9c9ea7] text-right">
              {translations.cryptoDetail?.last_year || "last year"}
            </p>
            <CryptoChart coinId={coinId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCrypto;
