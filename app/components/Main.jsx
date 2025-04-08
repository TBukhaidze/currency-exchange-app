"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import team from "../../public/img/team.png";

const Main = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="main py-4 md:py-8">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto mb-5 md:mb-7">
        <div className="text-center pt-3 md:pt-5">
          <span className="text-black-500 border-b-2 border-indigo-600 text-2xl sm:text-3xl">
            {translations.main?.site_goal || "საიტის მიზანი"}
          </span>
        </div>
        <div className="w-full md:w-11/12 lg:w-8/12 mx-auto py-3 md:py-5">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 p-4 md:p-6 lg:p-10 order-2 sm:order-1">
              <div className="image object-center text-center">
                <Image
                  src={team}
                  alt="team"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-4 md:p-5 order-1 sm:order-2">
              <div className="text">
                <h2 className="my-3 md:my-4 font-bold text-2xl sm:text-3xl md:text-4xl">
                  {translations.main?.market_problem || "ბაზარზე არსებული"}{" "}
                  <span className="text-indigo-600">
                    {translations.main?.highlighted_problem || "პრობლემა"}
                  </span>
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  {translations.main?.problem_description ||
                    "დღეს ქართულ ბაზარზე მრავალი კომპანია გვთავაზობს ვალუტის კონვერტაციას, თუმცა კურსები განსხვავდება. მომხმარებლებს უწევთ მათი შედარება, რათა საუკეთესო პირობები შეარჩიონ."}
                </p>
                <br />
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-indigo-600">
                  {translations.main?.site_purpose || "საიტის დანიშნულება"}
                </span>
                <p className="text-gray-700 text-sm md:text-base">
                  {translations.main?.site_purpose_description ||
                    "საიტი ავტომატურად ადარებს ყველა ოფიციალური გადამცვლელი კომპანიის კურსს და საუკეთესო ვარიანტს გთავაზობთ ყიდვისა და გაყიდვისთვის."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 md:p-4 border-t mx-4 md:mx-8" />
        <div className="w-full flex flex-nowrap justify-center items-center gap-2 md:gap-4 lg:gap-6 my-2 overflow-x-auto py-2">
          <Link
            href="/exchange"
            className="whitespace-nowrap px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-lg text-xs md:text-sm"
          >
            {translations.main?.exchange_rates || "ვალუტის კურსები"}
          </Link>
          <Link
            href="/crypto"
            className="whitespace-nowrap px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-lg text-xs md:text-sm"
          >
            {translations.main?.crypto_rates || "კრიპტოვალუტის კურსები"}
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-all hover:-translate-y-1 hover:shadow-lg text-xs md:text-sm"
          >
            {translations.main?.contact || "დაკავშირება"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
