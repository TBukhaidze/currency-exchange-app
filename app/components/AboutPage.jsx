import Link from "next/link";
import Image from "next/image";

import team from "../../public/img/team.png";
import user from "../../public/icons/user.svg";

const AboutPage = () => {
  return (
    <div className="main pb-8">
      <div className="w-8/12 mx-auto mb-7">
        <div className="text-center pt-5">
          <span className="text-black-500 border-b-2 border-indigo-600 text-3xl">
            საიტის მიზანი
          </span>
        </div>
        <div className="w-8/12 mx-auto py-5 flex">
          <div className="sm:flex items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center">
                <Image src={team} alt="team" />
              </div>
            </div>
            <div className="sm:w-1/2 p-5">
              <div className="text">
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                  ბაზარზე არსებული{" "}
                  <span className="text-indigo-600">პრობლემა</span>
                </h2>
                <p className="text-gray-700">
                  დღეს ქართულ ბაზარზე მრავალი კომპანია გვთავაზობს ვალუტის
                  კონვერტაციას, თუმცა კურსები განსხვავდება. მომხმარებლებს უწევთ
                  მათი შედარება, რათა საუკეთესო პირობები შეარჩიონ.
                </p>
                <br />
                <span className="font-bold text-3xl  sm:text-4xl text-indigo-600">
                  საიტის დანიშნულება
                </span>
                <p className="text-gray-700">
                  საიტი ავტომატურად ადარებს ყველა ოფიციალური გადამცვლელი
                  კომპანიის კურსს და საუკეთესო ვარიანტს გთავაზობთ ყიდვისა და
                  გაყიდვისთვის.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t mx-8 " />
        <div className="w-full flex justify-center my-2 gap-5">
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              href="/exchange"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              ვალუტის კურსები
            </Link>
          </div>
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              href="/contact"
              title="Get quote now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              დაკავშირება
            </Link>
          </div>
          <Link
            href="/exchange"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            ვალუტის კურსები
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            დაკავშირება
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
