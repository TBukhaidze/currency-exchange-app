import Image from "next/image";

import toggle from "../../public/icons/toggle.svg";
import info from "../../public/icons/info.svg";

const Calculator = () => {
  return (
    <>
      <p className="calc_p">მსურს გავყიდო</p>
      <div className="w-full flex calc_div justify-between">
        <input className="calc_input w-full" type="text" placeholder="0.00" />
        <div className="flex mr-2">
          <select className="calc_select select_text" defaultValue="GEL">
            <option
              value="GEL"
              data-sign="₾"
              data-select2-id="select2-data-3-ggu7"
            >
              1 ლარი
            </option>
            <option
              value="USD"
              data-sign="$"
              data-select2-id="select2-data-17-3y2c"
            >
              1 დოლარი
            </option>
            <option
              value="EUR"
              data-sign="€"
              data-select2-id="select2-data-18-jf6r"
            >
              1 ევრო
            </option>
            <option
              value="RUB"
              data-sign="₽"
              data-select2-id="select2-data-19-5onx"
            >
              100 რუბლი
            </option>
            <option
              value="TRY"
              data-sign="₺"
              data-select2-id="select2-data-20-59ak"
            >
              1 ლირა
            </option>
            <option
              value="GBP"
              data-sign="£"
              data-select2-id="select2-data-21-z44o"
            >
              1 ფუნტი
            </option>
            <option
              value="CHF"
              data-sign="CHF"
              data-select2-id="select2-data-22-9cn0"
            >
              1 ფრანკი
            </option>
            <option
              value="AZN"
              data-sign="₼"
              data-select2-id="select2-data-23-pr1q"
            >
              1 მანათი
            </option>
            <option
              value="AMD"
              data-sign="Դ"
              data-select2-id="select2-data-24-ujlv"
            >
              1000 დრამი
            </option>
            <option
              value="ILS"
              data-sign="ILS"
              data-select2-id="select2-data-25-3w7c"
            >
              10 შეკელი
            </option>
            <option
              value="PLN"
              data-sign="PLN"
              data-select2-id="select2-data-26-u0v0"
            >
              10 ზლოტი
            </option>
          </select>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button className="calc_toggle">
          <Image src={toggle} alt="toggle" />
        </button>
      </div>

      <p className="calc_p">მსურს ვიყიდო</p>
      <div className="w-full flex calc_div justify-between">
        <input className="calc_input w-full" type="text" placeholder="0.00" />
        <div className="flex mr-2">
          <select className="calc_select select_text" defaultValue="USD">
            <option
              value="GEL"
              data-sign="₾"
              data-select2-id="select2-data-3-ggu7"
            >
              1 ლარი
            </option>
            <option
              value="USD"
              data-sign="$"
              data-select2-id="select2-data-17-3y2c"
            >
              1 დოლარი
            </option>
            <option
              value="EUR"
              data-sign="€"
              data-select2-id="select2-data-18-jf6r"
            >
              1 ევრო
            </option>
            <option
              value="RUB"
              data-sign="₽"
              data-select2-id="select2-data-19-5onx"
            >
              100 რუბლი
            </option>
            <option
              value="TRY"
              data-sign="₺"
              data-select2-id="select2-data-20-59ak"
            >
              1 ლირა
            </option>
            <option
              value="GBP"
              data-sign="£"
              data-select2-id="select2-data-21-z44o"
            >
              1 ფუნტი
            </option>
            <option
              value="CHF"
              data-sign="CHF"
              data-select2-id="select2-data-22-9cn0"
            >
              1 ფრანკი
            </option>
            <option
              value="AZN"
              data-sign="₼"
              data-select2-id="select2-data-23-pr1q"
            >
              1 მანათი
            </option>
            <option
              value="AMD"
              data-sign="Դ"
              data-select2-id="select2-data-24-ujlv"
            >
              1000 დრამი
            </option>
            <option
              value="ILS"
              data-sign="ILS"
              data-select2-id="select2-data-25-3w7c"
            >
              10 შეკელი
            </option>
            <option
              value="PLN"
              data-sign="PLN"
              data-select2-id="select2-data-26-u0v0"
            >
              10 ზლოტი
            </option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <span className="calc_span">1 GEL = 0.3559 USD</span>
        <div className="flex mt-6">
          <Image src={info} alt="info" />
          <div>
            <p className="calc_p">
              გაითვალისწინეთ, გაცვლითი კურსი ფილიალის მიხედვით შესაძლებელია
              განსხვავდებოდეს. ინფორმაციის მისაღებად, მიმართეთ თქვენთვის
              სასურველ ფილიალს.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
