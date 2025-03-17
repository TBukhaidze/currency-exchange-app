"use client";

import { useState, useEffect } from "react";

import Calculator from "./Calculator";
import Exchange from "./Exchange";

import Spinner from "./spinner";
import { getCurrentTime } from "../utils/getCurrentTime";

const MainExchange = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(`${getCurrentTime()}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  gap-3 mb-8">
      <div className="main_white main_exch w-7/12">
        <div className="flex justify-between  mb-10">
          <h2 className="main_h2">ვალუტის კურსები</h2>
          {currentTime == "" ? (
            <Spinner />
          ) : (
            <p className="main_time">{currentTime}</p>
          )}
        </div>
        <div className="flex justify-between text-center">
          <div className="w-full grid grid-cols-5 gap-8">
            <Exchange />
          </div>
        </div>
      </div>
      <div className="main_white main_exch w-2/5 ml-6 h-full">
        <h2 className="calc_h2 mb-10">კალკულატორი</h2>
        <Calculator />
      </div>
    </div>
  );
};

export default MainExchange;
