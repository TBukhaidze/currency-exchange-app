import Image from "next/image";
import Link from "next/link";

import { icons } from "../features/constants/icons";

const Sidebar = () => {
  return (
    <div className="sidebar hidden lg:block md:block">
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/">
          <Image src={icons.home} alt="home" />
        </Link>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/exchange">
          <Image src={icons.dolar} alt="dolar" />
        </Link>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/crypto">
          <Image src={icons.btc} alt="bitcoin" />
        </Link>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/contact">
          <Image src={icons.contact} alt="contact" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
