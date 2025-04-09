import Image from "next/image";
import Link from "next/link";

import everest from "../../public/img/everest.jpg";
import temo from "../../public/img/temo.jpg";

import fb from "../../public/icons/fb.svg";
import linkedIn from "../../public/icons/linkedIn.svg";
import gitHub from "../../public/icons/gitHub.svg";
import telegram from "../../public/icons/telegram.svg";

const ContactPage = () => {
  return (
    <div className="main pb-8">
      <h2 className="main_h2 text-center pt-5">Developer</h2>
      <div className="p-4 border-t mx-8" />

      <div className="max-w-md w-full mx-auto mb-8 px-4">
        <div className="w-full mt-16 bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <Image
              className="object-cover object-top w-full"
              src={everest}
              alt="Cover background"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <Image
              className="object-cover object-center h-32 w-32"
              src={temo}
              alt="Temuri Bukhaidze photo"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">Temuri Bukhaidze</h2>
            <br />
            <p className="text-gray-500">Front end developer</p>
            <p className="text-gray-500">React/Next.js</p>
          </div>
          <div className="p-4 border-t mx-8 mt-2">
            <p className="text-center text-gray-600">Contacts</p>
            <ul className="flex justify-center items-center flex-wrap gap-5 mt-4">
              <li>
                <Link
                  href="https://www.facebook.com/buxa.buxa.7/"
                  target="_blank"
                >
                  <Image src={fb} alt="Facebook icon" />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/TBukhaidze" target="_blank">
                  <Image src={gitHub} alt="GitHub icon" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/temuri-bukhaidze-83728633a/"
                  target="_blank"
                >
                  <Image src={linkedIn} alt="LinkedIn icon" />
                </Link>
              </li>
              <li>
                <Link href="https://t.me/temobu" target="_blank">
                  <Image src={telegram} alt="Telegram icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border-t mx-8" />
    </div>
  );
};

export default ContactPage;
