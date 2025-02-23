import Image from "next/image";

import team from "../../../public/img/team.png";

const About = () => {
  return (
    <>
      <div className="text-center">
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
              <span className=" font-bold text-3xl  sm:text-4xl text-indigo-600">
                საიტის დანიშნულება
              </span>
              <p className="text-gray-700">
                საიტი ავტომატურად ადარებს ყველა ოფიციალური გადამცვლელი კომპანიის
                კურსს და საუკეთესო ვარიანტს გთავაზობთ ყიდვისა და გაყიდვისთვის.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
