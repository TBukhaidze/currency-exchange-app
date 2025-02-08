import Image from "next/image";

import up from "../../public/icons/up.svg";
import down from "../../public/icons/down.svg";

import usa from "../../public/icons/usa.svg";
import eur from "../../public/icons/eur.svg";
import rus from "../../public/icons/rus.svg";
import tr from "../../public/icons/tr.svg";
import uk from "../../public/icons/uk.svg";
import che from "../../public/icons/che.svg";
import azr from "../../public/icons/azr.svg";
import arm from "../../public/icons/arm.svg";
import isr from "../../public/icons/isr.svg";
import pol from "../../public/icons/pol.svg";

const Main = () => {
  return (
    <div className="flex  gap-3">
      <div className="main_white main_exch w-7/12">
        <h2 className="main_h2 mb-10">ვალუტის კურსები</h2>
        <div className="flex justify-between text-center">
          <div className="w-full grid grid-cols-5 gap-8">
            <div className="text-left col-span-2">
              <h3 className="main_h3">ვალუტა</h3>
            </div>
            <div>
              <h3 className="main_h3">ოფიციალური</h3>
            </div>
            <div>
              <h3 className="main_h3">ყიდვა</h3>
            </div>
            <div>
              <h3 className="main_h3">გაყიდვა</h3>
            </div>
            <div className="text-left col-span-2">
              <div className="flex gap-8  main_prices">
                <Image src={usa} alt="usaIcon" />
                <p className="my-auto">1 დოლარი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>2.7940</span>
              <span className="my-auto px-3">
                <Image src={up} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">2.7750</div>
            <div className="my-auto main_prices">2.7750 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={eur} alt="eurIcon" />
                <p className="my-auto">1 ევრო</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>2.9010</span>
              <span className="my-auto px-3">
                <Image src={down} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">2.8650</div>
            <div className="my-auto main_prices">2.8800 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={rus} alt="rusIcon" />
                <p className="my-auto">100 რუბლი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>2.8840</span>
              <span className="my-auto px-3">
                <Image src={down} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">2.7500</div>
            <div className="my-auto main_prices">2.9000 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={tr} alt="turIcon" />
                <p className="my-auto">1 ლირა</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>0.0776</span>
              <span className="my-auto px-3">
                <Image src={up} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">0.0765</div>
            <div className="my-auto main_prices">0.0835 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={uk} alt="ukIcon" />
                <p className="my-auto">1 ფუნტი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>3.4794</span>
              <span className="my-auto px-3">
                <Image src={up} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">3.4280</div>
            <div className="my-auto main_prices">3.4710 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={che} alt="cheIcon" />
                <p className="my-auto">1 ფრანკი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>3.0801</span>
              <span className="my-auto px-3">
                <Image src={up} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">3.0400</div>
            <div className="my-auto main_prices">3.0850 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={azr} alt="azrIcon" />
                <p className="my-auto">1 მანათი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>1.6431</span>
              <span className="my-auto px-3">
                <Image src={down} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">1.5255</div>
            <div className="my-auto main_prices">1.6570 </div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={arm} alt="armIcon" />
                <p className="my-auto">1000 დრამი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>7.0245</span>
              <span className="my-auto px-3">
                <Image src={down} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">5.8175</div>
            <div className="my-auto main_prices">7.3080</div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={isr} alt="isrIcon" />
                <p className="my-auto">10 შეკელი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>7.8605</span>
              <span className="my-auto px-3">
                <Image src={up} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">6.2135</div>
            <div className="my-auto main_prices">8.2385</div>

            <div className="text-left col-span-2 ">
              <div className="flex gap-8  main_prices">
                <Image src={pol} alt="polIcon" />
                <p className="my-auto">10 ზლოტი</p>
              </div>
            </div>
            <div className="flex text-left my-auto main_prices">
              <span>6.9205</span>
              <span className="my-auto px-3">
                <Image src={up} alt="up" />
              </span>
            </div>
            <div className="my-auto main_prices">5.7370</div>
            <div className="my-auto main_prices">7.0835</div>

          </div>
        </div>
      </div>
      <div className="main_white main_exch w-5/12">
        <h1>calculator</h1>
      </div>
    </div>
  );
};

export default Main;
