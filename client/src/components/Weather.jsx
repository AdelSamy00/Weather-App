import React from 'react';
import Details from './Details';

function Weather({ WeatherData }) {
  return (
    <div>
      {WeatherData.weather ? (
        <div className="w-[400px] md:w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-lg m-auto relative px-6 top-[10%]">
          <div className="flex justify-between w-full">
            <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <p className="text-xl">
                    {WeatherData.name},{WeatherData.sys.country}
                  </p>
                  <p className="text-sm">
                    {WeatherData.weather[0].description}
                  </p>
                </div>
                <div>
                  <h1 className="text-6xl font-semibold">
                    {WeatherData.main.temp.toFixed()} ْC
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end">
              <div className="relative">
                <img
                  className="w-[120px]"
                  src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`}
                />
              </div>
              {WeatherData.name !== undefined ? (
                <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                  <Details
                    title={'Feels Like'}
                    description={`${WeatherData.main.feels_like.toFixed()}  ْC`}
                  />
                  <Details
                    title={'Humidity'}
                    description={`${WeatherData.main.humidity} %`}
                  />
                  <Details
                    title={'Wind Speed'}
                    description={`${WeatherData.wind.speed.toFixed()} KPH`}
                  />
                  <Details
                    title={'Pressure'}
                    description={`${WeatherData.main.pressure} hPa`}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
