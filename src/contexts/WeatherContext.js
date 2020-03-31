import React, { createContext, useReducer } from 'react'
import { weatherReducer } from '../reducers/WeatherReducer'

export const WeatherContext = createContext()

const initState = {
  cityName: '',
  day: '',
  weatherDescription: '',
  // Turn temp into int when we want to do math
  temp: '',
  weatherIcon: '',
  forecase: []
}

 const WeatherContextProvider = (props) =>  {
   const [ weather, dispatch ] = useReducer(weatherReducer, initState) 
  return (
    <WeatherContext.Provider value={weather}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
