"use client";

import { useEffect, useState } from "react";

import CryptoChart from "../../components/CryptoChar";
import { fetchCryptoDetails } from "@/app/features/api/getSingleCrypto";
import { useParams } from "next/navigation";

const SingleCrypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const params = useParams();

  const coinId = params.singleCrypto;

  useEffect(() => {
    if (!coinId) return;
    const getCryptoData = async () => {
      const data = await fetchCryptoDetails(coinId);
      setCryptoData(data);
    };

    getCryptoData();
  }, []);

  return (
    <div className="main pb-8">
      <div className="w-8/12 mx-auto pt-8">
        <div className="main_white main_exch">
          <CryptoChart coinId={coinId} />
          <h1>Bitcoin Info</h1>
          {cryptoData ? (
            <pre>{JSON.stringify(cryptoData, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCrypto;
