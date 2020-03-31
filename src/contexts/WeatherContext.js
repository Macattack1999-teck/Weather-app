import React, { createContext } from 'react'

export const WeatherContext = createContext()

const state = {
  cityName: '',
  day: '',
  weatherDescription: '',
  // Turn temp into int when we want to do math
  temp: '',
  weatherIcon: '',
  forecase: []
}

 const WeatherContextProvider = (props) =>  {
   const [ weather, dispatch ] = useReducer(weatherReducer, {}) 
  return (
    <WeatherContext.Provider>
      {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider
