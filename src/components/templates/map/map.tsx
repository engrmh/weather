import React from "react";
import SearchBox from "../../modules/searchBox/searchBox";
import useHomeCtx from "../home/context";
import MapSystem from "../../modules/map/map";

export default function Map() {
  const { getCurrentCityWeather, currentCityWeatherData } = useHomeCtx();
  return (
    <div className="w-full overflow-y-auto h-screen">
      <SearchBox
        startSearching={(text) => {
          getCurrentCityWeather(text);
        }}
      />
      <div className="bg-lightBlue p-2 rounded-xl mt-5">
        {currentCityWeatherData ? (
          <MapSystem
            lat={currentCityWeatherData.location.lat}
            lng={currentCityWeatherData.location.lon}
          />
        ) : (
          <h1 className="">No Data Found Please Search Your City First</h1>
        )}
      </div>
    </div>
  );
}
