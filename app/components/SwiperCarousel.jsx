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
import Link from "next/link";

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
            <h2 className="text-2xl font-bold mb-4">ვალუტის საუკეთესო კურსი</h2>
            <Link
              href="/exchange"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              ვალუტის კურსები
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image src={gas} alt="gas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">ბენზინის საუკეთესო ფასი</h2>
            <Link
              href="/exchange"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              ბენზინის ფასები
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={bitcoin}
            alt="bitcoin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">კრიპტოვალუტის კურსი</h2>
            <Link
              href="/crypto"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              კრიპტოს კურსები
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={btc}
            alt="bitcoin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">კრიპტოვალუტის კურსი</h2>
            <Link
              href="/crypto"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              კრიპტოს კურსები
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
