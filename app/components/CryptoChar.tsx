"use client";

import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchCryptoChart } from "../features/api/getCryptoChart";

interface ICryptoPrice {
  date: string;
  price: number;
}

interface CryptoChartProps {
  coinId: string;
}

const CryptoChart: React.FC<CryptoChartProps> = ({ coinId }) => {
  const [chartData, setChartData] = useState<ICryptoPrice[]>([]);
  const [chartHeight, setChartHeight] = useState<number>(300);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) setChartHeight(200);
      else if (window.innerWidth < 1024) setChartHeight(300);
      else setChartHeight(400);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const prices = await fetchCryptoChart(coinId);
      setChartData(
        prices.map(([timestamp, price]: [number, number]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price,
        }))
      );
    };
    getData();
  }, [coinId]);

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tick={{ fill: "#888" }} tickLine={false} />
        <YAxis
          domain={["auto", "auto"]}
          tick={{ fill: "#888" }}
          tickLine={false}
        />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={3}
          fill="url(#colorPrice)"
          isAnimationActive
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
