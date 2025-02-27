export enum WeatherStatus {
  "Sunny" = "/weather/Sunny.svg",
  "Cloudy" = "/weather/sun-cloud.png",
  "Rainy" = "/weather/Rainy.svg",
  "Snowy" = "/weather/Snowy.svg",
  // "Stormy" = "/weather/",
  // "Foggy" = "/weather/",
  //   "Windy" = "/weather/",
  "Partly cloudy" = "/weather/PartlyCloudy.svg",
  "Partly Cloudy" = "/weather/PartlyCloudy.svg",
  "Thunderstorms" = "/weather/thunderstorm.png",
  // "Hail" = "/weather/",
  // "Tornado" = "/weather/",
  // "Hurricane" = "/weather/",
  "Overcast" = "/weather/forecast.png", // Complete cloud coverage
  "Mist" = "/weather/forecast.png",
  // "Drizzle" = "/weather/",
  // "FreezingRain" = "/weather/",
  // "Dust" = "/weather/",
  // "Sandstorm" = "/weather/",
  // "Smoke" = "/weather/",
  // "Haze" = "/weather/",
  "Patchy rain nearby" = "/weather/sun-rain.png",
  "Moderate rain" = "/weather/rain2.png",
  "Light rain" = "/weather/rain3.png",
  "Light freezing rain" = "/weather/snow-rain.png",
  "Clear" = "/weather/sun-cloud.png",
  // "" = "/weather/",
}

// Convert the enum to an array
export const weatherArray = Object.keys(WeatherStatus).map((key) => ({
  status: key,
  icon: WeatherStatus[key as keyof typeof WeatherStatus],
}));
