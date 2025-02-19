import Image from "next/image";
import search from "../../public/icons/search.svg";
import diamond from "../../public/icons/diamond.svg";
import user from "../../public/icons/user.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-8/12 mx-auto my-7">
      <div className="flex justify-between text-base md:text-3xl">
        <div className="txt_orange">
          <Link href="/" className="flex">
            ალმასი
            <Image src={diamond} alt="diamond" />
          </Link>
        </div>
        <div>
          <Link href="/" className="flex">
            <Image src={search} alt="search" className="mt-3" />
          </Link>
        </div>
        <div className="flex justify-center gap-2 personal_cab">
          <Image src={user} alt="user" />
          <Link
            href="/"
            className="txt_white nav_text "
            style={{ fontSize: "0.933rem" }}
          >
            პირადი სივრცე
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
