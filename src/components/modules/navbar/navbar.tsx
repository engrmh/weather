import { Link } from "react-router-dom";
import { TiWeatherPartlySunny, TiThList, TiMap } from "react-icons/ti";

export default function Navbar() {
  return (
    <div className="!bg-lightBlue p-4 md:h-navHeight rounded-xl flex md:block items-center">
      <img
        className=""
        src="/weather.png"
        height={60}
        width={60}
        alt="Weather"
      />
      <div className="md:mt-24 ml-10 md:ml-0 flex md:flex-col items-center gap-4 md:gap-14">
        <Link to="/" className="flex flex-col items-center">
          <TiWeatherPartlySunny className="text-xl md:text-3xl mb-2" />
          Weather
        </Link>
        <Link to="/cities" className="flex flex-col items-center">
          <TiThList className="text-xl md:text-3xl mb-2" />
          Cities
        </Link>
        <Link to="/map" className="flex flex-col items-center">
          <TiMap className="text-xl md:text-3xl mb-2" />
          Map
        </Link>
      </div>
    </div>
  );
}
