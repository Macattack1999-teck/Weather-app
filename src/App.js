import React from 'react';
import WeatherContextProvider from '../src/contexts/WeatherContext'
import WeatherForm from './components/WeatherForm'

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherForm />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
