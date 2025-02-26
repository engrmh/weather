import useAxios from "../utils/axios";
const apiKey = "52e1433d78df4338a4c102251252502";

export const WeatherAPI = () => {
  // query : Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name
  const getCurrent = async (query: string) => {
    const res = await useAxios.get(`current.json?q=${query}&key=${apiKey}`);
    return res;
  };

  // query : Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name
  const getForecast = async (query: string) => {
    const res = await useAxios.get(
      `forecast.json?q=${query}&days=7&hour=24&key=${apiKey}`
    );
    return res;
  };

  // query : Pass US Zipcode, UK Postcode, Canada Postalcode, IP address, Latitude/Longitude (decimal degree) or city name
  // const searching = async (query: string) => {
  //   const res = await useAxios.get(`current.json?q=${query}&key=${apiKey}`);
  //   return res;
  // };

  return {
    getCurrent,
    getForecast,
  };
};
