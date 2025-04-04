import Link from "next/link";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              href="/ "
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/exchange"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Calculator
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/exchange"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Exchange
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/crypto"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Crypto
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/contact"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/contact"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Team
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © {year} Diamond, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
