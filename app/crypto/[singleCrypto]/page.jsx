"use client";

import { useEffect, useState } from "react";

import CryptoChart from "../../components/CryptoChar";
import { fetchCryptoDetails } from "@/app/features/api/getSingleCrypto";
import { useParams } from "next/navigation";

const SingleCrypto = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const params = useParams();
  const coinName = params.singleCrypto;

  useEffect(() => {
    const getCryptoData = async () => {
      const data = await fetchCryptoDetails(coinName);
      setCryptoData(data);
      console.log("Crypto Data:", data);
    };

    getCryptoData();
  }, []);

  return (
    <div>
      <CryptoChart coinId={coinName} />
      <h1>Bitcoin Info</h1>
      {cryptoData ? (
        <pre>{JSON.stringify(cryptoData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleCrypto;
