import Link from "next/link";
import Image from "next/image";

import team from "../../public/img/team.png";

const Main = () => {
  return (
    <div className="main py-8">
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
        <div className="w-full flex justify-center my-2 gap-10">
          <Link
            href="/exchange"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            ვალუტის კურსები
          </Link>
          <Link
            href="/crypto"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            კრიპტოვალუტის კურსები
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

export default Main;
