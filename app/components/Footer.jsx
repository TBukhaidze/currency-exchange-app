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
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {footerLinks.map((link, index) => (
            <div key={index} className="px-5 py-2">
              <Link
                href={link.href}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © {year}{" "}
          {translations.footer?.copyright ||
            "Diamond, Inc. All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
