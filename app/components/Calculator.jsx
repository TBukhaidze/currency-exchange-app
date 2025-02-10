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
    </>
  );
};

export default Calculator;
