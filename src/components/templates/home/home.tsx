import Grid from "@mui/material/Grid";
import MapSystem from "../../modules/map/map";
import SearchBox from "../../modules/searchBox/searchBox";
import useHomeCtx from "./context";
import { weatherArray, WeatherStatus } from "../../../enum/weatherStatus";

export default function Home() {
  const {
    loading,
    getCurrentCityWeather,
    getCurrentCityForecastWeather,
    currentCityWeatherData,
    currentCitySevenDaysForcastWeatherData,
  } = useHomeCtx();

  return (
    <div className="w-full overflow-y-auto h-screen">
      <SearchBox
        startSearching={(text) => {
          getCurrentCityWeather(text);
          getCurrentCityForecastWeather(text);
        }}
      />
      <div className="mt-5">
        {currentCityWeatherData && currentCitySevenDaysForcastWeatherData ? (
          <Grid container>
            <Grid item container xs={12} md={6}>
              <Grid xs={12}>
                <div className="py-5 px-10 flex flex-col md:flex-row justify-between items-center gap-11">
                  <div className="">
                    <h1 className="text-3xl font-bold">
                      {currentCityWeatherData.location.name},{" "}
                      {currentCityWeatherData.location.region},{" "}
                      {currentCityWeatherData.location.country}
                    </h1>
                    <h1 className="text-lg mt-3">
                      Time Zone: {currentCityWeatherData.location.tz_id}
                    </h1>
                    <h1 className="text-6xl mt-16 font-bold">
                      {currentCityWeatherData.current.temp_c} °C
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img
                      // src={`https:${currentCityWeatherData.current.condition.icon}`}
                      src={
                        weatherArray.find(
                          (item) =>
                            item.status ===
                            currentCityWeatherData.current.condition.text
                        )?.icon
                      }
                      alt=""
                      height={250}
                      width={250}
                    />
                    <p className="text-xl">
                      {currentCityWeatherData.current.condition.text}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid xs={12}>
                <div className="mt-10 bg-lightBlue p-7 rounded-xl">
                  <h1 className="text-xl mb-5">Other Information</h1>
                  <div className="flex flex-wrap gap-[3rem]">
                    <div className="flex flex-col gap-y-3">
                      <p className="flex items-center">
                        UV: {currentCityWeatherData.current.uv}
                      </p>
                      <p className="flex items-center">
                        Humidity: {currentCityWeatherData.current.humidity}
                      </p>
                      <p className="flex items-center">
                        Cloud: {currentCityWeatherData.current.cloud}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      {" "}
                      <p className="flex items-center">
                        Wind Gust: {currentCityWeatherData.current.gust_kph} kph
                      </p>
                      <p className="flex items-center">
                        Wind Speed: {currentCityWeatherData.current.wind_kph}{" "}
                        kph
                      </p>
                      <p className="flex items-center">
                        Wind Dir: {currentCityWeatherData.current.wind_degree}°
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={12}>
                <div className="mt-5 bg-lightBlue p-7 rounded-xl">
                  <h1 className="text-xl mb-5">5 Next Days</h1>
                  <div className="overflow-hidden">
                    <div className="flex gap-[3rem] overflow-x-auto w-[50rem]">
                      {currentCitySevenDaysForcastWeatherData.forecast.forecastday.map(
                        (item, index) => (
                          <div
                            className="flex flex-col justify-center items-center"
                            key={index}
                          >
                            <p className="text-nowrap">{item.date}</p>
                            <img
                              className=""
                              height={50}
                              width={50}
                              src={`https:${item.day.condition.icon}`}
                            />
                            <p className="text-nowrap">
                              {item.day.condition.text}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={6}>
              <Grid xs={12} className="px-3">
                <div className="mt-10 bg-lightBlue p-7 rounded-xl h-[25rem]">
                  <MapSystem
                    lat={currentCityWeatherData.location.lat}
                    lng={currentCityWeatherData.location.lon}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <div className="text-white">
            <h1 className="">For Show The Weather Please Search Your City</h1>
          </div>
        )}
      </div>
    </div>
  );
}
