import Calculator from "./Calculator";
import Exchange from "./Exchange";

const Main = () => {
  return (
    <div className="flex  gap-3 mb-8">
      <div className="main_white main_exch w-7/12">
        <h2 className="main_h2 mb-10">ვალუტის კურსები</h2>
        <div className="flex justify-between text-center">
          <div className="w-full grid grid-cols-5 gap-8">
            <Exchange />
          </div>
        </div>
      </div>
      <div className="main_white main_exch w-2/5 ml-6 h-full">
        <h2 className="calc_h2 mb-10">კალკულატორი</h2>
        <Calculator />
      </div>
    </div>
  );
};

export default Main;
