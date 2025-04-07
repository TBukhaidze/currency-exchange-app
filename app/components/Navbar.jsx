"use client";

import Image from "next/image";
import search from "../../public/icons/search.svg";
import diamond from "../../public/icons/diamond.svg";
import user from "../../public/icons/user.svg";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);

  return (
    <div className="w-8/12 mx-auto my-7">
      <div className="flex justify-between items-center text-base md:text-3xl">
        <div className="txt_orange">
          <Link href="/" className="flex items-center gap-1">
            Diamond
            <Image src={diamond} alt="diamond" />
          </Link>
        </div>

        <div className="nav_text_black">
          <Link href="/" className="flex">
            {translations.navbar?.home || "მთავარი"}
          </Link>
        </div>
        <div className="nav_text_black">
          <Link href="/exchange" className="flex">
            {translations.navbar?.currency || "ვალუტა"}
          </Link>
        </div>
        <div className="nav_text_black">
          <Link href="/crypto" className="flex">
            {translations.navbar?.crypto || "კრიპტოვალუტა"}
          </Link>
        </div>
        <div className="nav_text_black">
          <Link href="/contact" className="flex">
            {translations.navbar?.contact || "კონტაქტი"}
          </Link>
        </div>

        <div>
          <Link href="/" className="flex">
            <Image src={search} alt="search" className="mt-3" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center personal_cab">
            <button
              onClick={toggleLanguage}
              className="flex justify-center items-center w-full text-white text-sm gap-3 px-5 "
            >
              <Image src={user} alt="user" />
              {language === "en" ? "GE" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
