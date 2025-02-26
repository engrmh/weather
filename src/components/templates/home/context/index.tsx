import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { WeatherAPI } from "../../../../services/weatherApi";
import { ICurrentWeather } from "../../../../interfaces/ICurrent";
import { IForeCast } from "../../../../interfaces/IForecast";

interface ICtxValue {
  loading: boolean;
  currentCityWeatherData: ICurrentWeather | undefined;
  currentCitySevenDaysForcastWeatherData: IForeCast | undefined;
  getCurrentCityWeather: (city: string) => Promise<void>;
  getCurrentCityForecastWeather: (city: string) => Promise<void>;
}
const HomeContext = createContext<ICtxValue | undefined>(undefined);

export const HomeCtxProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentCityWeatherData, setCurrentCityWeatherData] = useState<
    ICurrentWeather | undefined
  >();
  const [
    currentCitySevenDaysForcastWeatherData,
    setCurrentSevenForcastCityWeatherData,
  ] = useState<IForeCast | undefined>();
  const { getCurrent, getForecast } = WeatherAPI();

  const getCurrentCityWeather = async (city: string) => {
    try {
      setLoading(true);
      const res = await getCurrent(city);
      const data = await res;

      if (data.status === 200) {
        console.log(data.data);
        setCurrentCityWeatherData(data.data);
      }
    } finally {
      setLoading(false);
    }
  };
  const getCurrentCityForecastWeather = async (city: string) => {
    try {
      setLoading(true);
      const res = await getForecast(city);
      const data = await res;

      if (data.status === 200) {
        console.log(data.data);
        setCurrentSevenForcastCityWeatherData(data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const ctxValue: ICtxValue = {
    loading,
    currentCityWeatherData,
    currentCitySevenDaysForcastWeatherData,
    getCurrentCityWeather,
    getCurrentCityForecastWeather,
  };

  return (
    <HomeContext.Provider value={ctxValue}>{children}</HomeContext.Provider>
  );
};

export const useHomeCtx = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error("useHomeCtx must be use within a HomeCtxProvider");
  }
  return context;
};

export default useHomeCtx;
