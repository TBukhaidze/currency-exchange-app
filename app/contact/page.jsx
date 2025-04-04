import Image from "next/image";
import Link from "next/link";

import everest from "../../public/img/everest.jpg";
import clouds from "../../public/img/clouds.jpg";
import temo from "../../public/img/temo.jpg";
import archil from "../../public/img/archil.jpg";

import fb from "../../public/icons/fb.svg";
import linkedIn from "../../public/icons/linkedIn.svg";
import gitHub from "../../public/icons/gitHub.svg";
import telegram from "../../public/icons/telegram.svg";

const ContactPage = () => {
  return (
    <div className="main pb-8">
      <h2 className="main_h2 text-center pt-5">Developers</h2>
      <div className="p-4 border-t mx-8 " />
      <div className="w-8/12 mx-auto mb-8 flex">
        <div className="w-1/2">
          <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
              <Image
                className="object-cover object-top w-full"
                src={everest}
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <Image
                className="object-cover object-center h-32"
                src={temo}
                alt="Back end developer"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">Temuri Bukhaidze</h2>
              <p className="text-gray-500">Front end developer</p>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
              <p className=" text-center text-gray-600">Contacts</p>
              <ul className="py-4 mt-2 text-gray-700 flex items-center justify-center gap-5">
                <li className="flex flex-col items-center justify-center gap-5 contacts_svg">
                  <Link
                    href="https://www.facebook.com/buxa.buxa.7/"
                    target="_blank"
                  >
                    <Image src={fb} alt="fbIcon" />
                  </Link>
                </li>
                <li className="flex flex-col items-center justify-between contacts_svg">
                  <Link href="https://github.com/TBukhaidze" target="_blank">
                    <Image src={gitHub} alt="githubIcon" />
                  </Link>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 contacts_svg">
                  <Link
                    href="https://www.linkedin.com/in/temuri-bukhaidze-83728633a/"
                    target="_blank"
                  >
                    <Image src={linkedIn} alt="linkedInIcon" />
                  </Link>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 contacts_svg">
                  <Link href="https://t.me/temobu" target="_blank">
                    <Image src={telegram} alt="telegramIcon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
              <Image
                className="object-cover object-top w-full"
                src={clouds}
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <Image
                className="object-cover object-center h-32"
                src={archil}
                alt="Back end developer"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">Archil Gelenidze</h2>
              <p className="text-gray-500">Back end developer</p>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
              <p className=" text-center text-gray-600">Contacts</p>
              <ul className="py-4 mt-2 text-gray-700 flex items-center justify-center gap-5">
                <li className="flex flex-col items-center justify-center gap-5 contacts_svg">
                  <Link
                    href="https://www.facebook.com/profile.php?id=100072241922948"
                    target="_blank"
                  >
                    <Image src={fb} alt="fbIcon" />
                  </Link>
                </li>
                <li className="flex flex-col items-center justify-between contacts_svg">
                  <Link
                    href="https://github.com/ArchilGelenidze"
                    target="_blank"
                  >
                    <Image src={gitHub} alt="githubIcon" />
                  </Link>
                </li>
                <li className="flex flex-col items-center justify-center gap-5 contacts_svg">
                  <Link href="https://t.me/Lucetam" target="_blank">
                    <Image src={telegram} alt="telegramIcon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t mx-8 " />
    </div>
  );
};

export default ContactPage;
