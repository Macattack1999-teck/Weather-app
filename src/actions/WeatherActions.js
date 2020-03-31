const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const getCurrentWeather = (zip) => {
  return {
    type: 'GET_WEATHER',
    zip: zip
  }
}