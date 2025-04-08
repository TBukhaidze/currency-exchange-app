"use client";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const year = new Date().getFullYear();

const Footer = () => {
  const { translations } = useContext(LanguageContext);

  const footerLinks = [
    { href: "/", text: translations.footer?.about || "About" },
    {
      href: "/exchange",
      text: translations.footer?.calculator || "Calculator",
    },
    { href: "/exchange", text: translations.footer?.exchange || "Exchange" },
    { href: "/crypto", text: translations.footer?.crypto || "Crypto" },
    { href: "/contact", text: translations.footer?.contact || "Contact" },
    { href: "/contact", text: translations.footer?.team || "Team" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 lg:gap-x-10">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className="text-sm md:text-base text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-6 md:mt-8 text-xs md:text-sm text-center text-gray-400">
          © {year}{" "}
          {translations.footer?.copyright ||
            "Diamond, Inc. All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
