import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useDataFromApi = () => {
  const [appState, setAppState] = useState({
    wheatherData: [],
    isFetching:false
  });
  
  useEffect(() => {
    //get data from axios api
    console.log('testing env', process.env.REACT_APP_WEATHER_API_KEY)
    const fetchData = async () => {
      try{
        setAppState({wheatherData:appState.wheatherData, isFetching: true});
        await axios
          .get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.7001&lon=-79.4163&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
          .then((res)=>{
            const wantedData = res.data.daily.slice(0,5);
            setAppState({wheatherData: wantedData, isFetching: false})
            console.log('res',res, res.data)
          })
      }catch(exception){
        console.log(exception);
        setAppState({wheatherData:appState.wheatherData, isFetching:false});
      }
    };
    fetchData();
    
  }, [])


  return {
    appState
  }
}

export default useDataFromApi
