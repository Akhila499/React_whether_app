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
          .get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
          .then((res)=>{
            setAppState({wheatherData: res.data, isFetching: false})
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
