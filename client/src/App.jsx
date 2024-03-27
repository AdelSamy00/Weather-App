import { useState } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${
    import.meta.env.VITE_APP_API_KEY
  }`;

  const searchLocation = async (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data);
        //console.log(res.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="w-full h-screen relative bg-gray-200">
      <div className="text-center p-4">
        <input
          type="text"
          placeholder="Search for any country"
          className="py-3 px-6 md:w-[700px] sm:w-[500px] w-[300px] placeholder:text-gray-400 text-lg rounded-3xl border border-gray-200 text-gray-600 focus:outline-none shadow-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
        />
      </div>
      <div className="h-[555px] flex justify-center items-center">
        <Weather WeatherData={data} />
      </div>
    </div>
  );
}

export default App;
