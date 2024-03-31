import WeatherDetails from './components/WeatherDetails'
import { useState } from 'react'
import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const [location, setLocation] = useState('');
  const [isVisible,setIsVisible]=useState(false);

  function btnOnclick(){
    setLocation(inputRef.current.value);
    setIsVisible(true);
    inputRef.current.value='';
  }

  return (
    <>
      <div className="h-screen flex-col flex items-center justify-center flex-wrap">
        <h1 className="text-2xl font-bold text-blue-900">Weather App</h1>
        <div className="mt-10">
          <input
            className=" border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none hover:border-gray-400"
            type="text"
            placeholder="search location"
            id='inputField'
            ref={inputRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 rounded  ml-2 h-10"
            onClick={btnOnclick}
          >
            Search
          </button>
        </div>
        {isVisible && <WeatherDetails searchLocation={location}/>}
      </div>
    </>
  )
}

export default App
