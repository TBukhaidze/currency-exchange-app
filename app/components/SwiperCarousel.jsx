"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import money from "../../public/img/money.jpg";
import gas from "../../public/img/gas.jpg";
import btc from "../../public/img/btc.jpg";
import bitcoin from "../../public/img/bitcoin.jpg";

import Image from "next/image";

const SwiperCarousel = () => {
  return (
    <div className="h-[50vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="relative">
          <Image
            src={money}
            alt="money"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">
              Обменяйте валюту быстро и выгодно
            </h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Перейти к обмену
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image src={gas} alt="gas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">
              Лучшие курсы валют на рынке
            </h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Узнать подробнее
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={bitcoin}
            alt="bitcoin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">
              Моментальный обмен криптовалют
            </h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Начать обмен
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={btc}
            alt="bitcoin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">
              Моментальный обмен криптовалют
            </h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Начать обмен
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
