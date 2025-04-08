"use client";

import Image from "next/image";
import diamond from "../../public/icons/diamond.svg";
import user from "../../public/icons/user.svg";
import menuIcon from "../../public/icons/menu.svg";
import closeIcon from "../../public/icons/close.svg";
import Link from "next/link";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full md:w-8/12 mx-auto my-7 relative">
      <div className="flex justify-between items-center text-base md:text-3xl px-4 md:px-0">
        <div className="txt_orange flex-shrink-0">
          <Link href="/" className="flex items-center gap-1">
            Diamond
            <Image src={diamond} alt="diamond" width={24} height={24} />
          </Link>
        </div>

        <div className="hidden md:flex gap-6 flex-1 justify-center mx-4">
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
              <Image src={user} alt="user" width={20} height={20} />
              {language === "en" ? "GE" : "EN"}
            </button>
          </div>

          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <Image
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg px-4 py-2">
          <div className="nav_text_black block py-3 border-b">
            <Link href="/" onClick={toggleMenu}>
              {translations.navbar?.home || "მთავარი"}
            </Link>
          </div>
          <div className="nav_text_black block py-3 border-b">
            <Link href="/exchange" onClick={toggleMenu}>
              {translations.navbar?.currency || "ვალუტა"}
            </Link>
          </div>
          <div className="nav_text_black block py-3 border-b">
            <Link href="/crypto" onClick={toggleMenu}>
              {translations.navbar?.crypto || "კრიპტოვალუტა"}
            </Link>
          </div>
          <div className="nav_text_black block py-3 border-b">
            <Link href="/contact" onClick={toggleMenu}>
              {translations.navbar?.contact || "კონტაქტი"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
