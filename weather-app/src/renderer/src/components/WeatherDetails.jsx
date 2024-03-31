import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';

function WeatherDetails(props) {

  const [dataa, setDataa] = useState({});
  const base = "http://api.openweathermap.org/data/2.5"
  const apiKey = "33da9210e991a78e768847584ec5c77b";
  // const url = `${base}/weather?q=${props.searchLocation}&units=metric&appid=${apiKey}`;
  const url = "https://api.coincap.io/v2/assets/bitcoin";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(url)
            setData(response.data);
            console.log(response);
      } catch (error) {
        console.error('Error fetching data:...', error);
      }
    }
    fetchData();
  }, [props.searchLocation]);

  return (
    <>

    </>
  )
}

export default WeatherDetails