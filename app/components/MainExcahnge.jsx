"use client";

import Calculator from "./Calculator";
import CurrencyList from "./CurrencyList";

const MainExchange = () => {
  return (
    <div className="flex  gap-3 mb-8">
      <CurrencyList />
      <Calculator />
    </div>
  );
};

export default MainExchange;
