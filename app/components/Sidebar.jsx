import Image from "next/image";

import location from "../../public/icons/location.svg";
import dolar from "../../public/icons/dolar.svg";
import home from "../../public/icons/home.svg";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/">
          <Image src={home} alt="home" />
        </Link>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/">
          <Image src={dolar} alt="dolar" />
        </Link>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <Link href="/">
          <Image src={location} alt="location" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
