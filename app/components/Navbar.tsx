"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Link from "next/link";

import { icons } from "../features/constants/icons";

interface INavbarTranslations {
  home?: string;
  currency?: string;
  crypto?: string;
  contact?: string;
}

interface ITranslations {
  navbar?: INavbarTranslations;
}

const Navbar = () => {
  const { language, toggleLanguage, translations } = useContext(
    LanguageContext
  ) as {
    language: string;
    toggleLanguage: () => void;
    translations: ITranslations;
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full md:w-8/12 mx-auto my-7 relative">
      <div className="flex justify-between items-center text-base md:text-3xl px-4 md:px-0 md:justify-center">
        <div className="txt_orange flex-shrink-0">
          <Link href="/" className="flex items-center gap-1">
            Diamond
            <Image src={icons.diamond} alt="diamond" width={24} height={24} />
          </Link>
        </div>

        <div className="hidden md:flex gap-10 flex-1 justify-center mx-4">
          <div className="nav_text_black whitespace-nowrap">
            <Link href="/">{translations.navbar?.home || "მთავარი"}</Link>
          </div>
          <div className="nav_text_black whitespace-nowrap">
            <Link href="/exchange">
              {translations.navbar?.currency || "ვალუტა"}
            </Link>
          </div>
          <div className="nav_text_black whitespace-nowrap">
            <Link href="/crypto">
              {translations.navbar?.crypto || "კრიპტოვალუტა"}
            </Link>
          </div>
          <div className="nav_text_black whitespace-nowrap">
            <Link href="/contact">
              {translations.navbar?.contact || "კონტაქტი"}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="flex items-center personal_cab">
            <button
              onClick={toggleLanguage}
              className="flex justify-center items-center w-full text-white text-sm gap-3 px-5"
            >
              <Image src={icons.user} alt="user" width={20} height={20} />
              {language === "en" ? "GE" : "EN"}
            </button>
          </div>

          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <Image
              src={isMenuOpen ? icons.close : icons.menu}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg px-4 py-2 text-center">
          <Link href="/" onClick={toggleMenu} className="w-full">
            <div className="nav_text_black block py-3 border-b">
              {translations.navbar?.home || "მთავარი"}
            </div>
          </Link>
          <Link href="/exchange" onClick={toggleMenu} className="w-full">
            <div className="nav_text_black block py-3 border-b">
              {translations.navbar?.currency || "ვალუტა"}
            </div>
          </Link>
          <Link href="/crypto" onClick={toggleMenu} className="w-full">
            <div className="nav_text_black block py-3 border-b">
              {translations.navbar?.crypto || "კრიპტოვალუტა"}
            </div>
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="w-full">
            <div className="nav_text_black block py-3 border-b">
              {translations.navbar?.contact || "კონტაქტი"}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
