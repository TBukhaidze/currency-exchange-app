"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { LanguageContext } from "../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperCarousel = () => {
  const { translations } = useContext(LanguageContext);

  const slides = [
    {
      image: "/img/money.jpg",
      title: translations.carousel?.currency_title || "ვალუტის საუკეთესო კურსი",
      link: "/exchange",
      button: translations.carousel?.currency_button || "ვალუტის კურსები",
    },
    {
      image: "/img/gas.jpg",
      title: translations.carousel?.gas_title || "ბენზინის საუკეთესო ფასი",
      link: "/exchange",
      button: translations.carousel?.gas_button || "ბენზინის ფასები",
    },
    {
      image: "/img/btc.jpg",
      title: translations.carousel?.crypto_title || "კრიპტოვალუტის კურსი",
      link: "/crypto",
      button: translations.carousel?.crypto_button || "კრიპტოს კურსები",
    },
    {
      image: "/img/bitcoin.jpg",
      title: translations.carousel?.bitcoin_title || "ბიტკოინი",
      link: "/crypto/bitcoin",
      button: translations.carousel?.bitcoin_button || "ბიტკოინის კურსი",
    },
  ];

  return (
    <div className="h-[40vh] sm:h-[45vh] lg:h-[50vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image src={slide.image} alt="" fill className="object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4">
              <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
              <Link
                href={slide.link}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                {slide.button}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
