import Calculator from "./Calculator";
import Exchange from "./Exchange";

const Main = () => {
  return (
    <div className="flex  gap-3">
      <div className="main_white main_exch w-7/12">
        <h2 className="main_h2 mb-10">ვალუტის კურსები</h2>
        <div className="flex justify-between text-center">
          <div className="w-full grid grid-cols-5 gap-8">
            <Exchange />
          </div>
        </div>
      </div>
      <div className="main_white main_exch w-5/12">
        <Calculator />
      </div>
    </div>
  );
};

export default Main;
