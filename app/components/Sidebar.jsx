import Image from "next/image";

import location from "../../public/icons/location.svg";
import dolar from "../../public/icons/dolar.svg";
import text from "../../public/icons/text.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center mb-4 sidebar_el">
        <a href="">
          <Image src={dolar} alt="dolar" />
        </a>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <a href="">
          <Image src={location} alt="location" />
        </a>
      </div>
      <div className="flex justify-center mb-4 sidebar_el">
        <a href="">
          <Image src={text} alt="text" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
