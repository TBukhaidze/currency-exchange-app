import Image from "next/image";
import Link from "next/link";

import linkedIn from "../../public/icons/linkedIn.svg";
import gitHub from "../../public/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="w-8/12 mx-auto my-7">
      <p className="footer_p">
        Front end developed by use next.js/react, tailwind{" "}
      </p>
      <p className="footer_p">Back end developed by use Phyton</p>
      <div className="flex justify-center">
        <div>
          <Link href="">
            <Image src={linkedIn} alt="linkedInIcon" />
          </Link>
        </div>
        <div>
          <Link href="">
            <Image src={gitHub} alt="gitHubIcon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
