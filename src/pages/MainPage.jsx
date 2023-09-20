import { useState } from 'react';
import InputField from '../components/InputField';
import WeatherCard from '../components/WeatherCard';

import '../styles/MainPage.css';

const MainPage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const handleChangeInputText = (e) => setCity(e.target.value);

  const clearTextInput = () => setCity('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    city && fetchData();
    clearTextInput();
  };

  const fetchData = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status === 200) {
        console.log('Successfully getted data!');
        setWeatherData(data);
      } else if (data.error.code === 1006) {
        alert(data.error.message); //zrobić coś lepszego
      } else {
        console.log('Server Error!', data.error.message);
      }
    } catch (error) {
      console.log('Fetch Error!', error);
    }
  };

  return (
    <div className="mainPage">
      <h3 className="mainPage__welcomeText">
        Check the weather of the whole world
        <br />
        with our <span className="gradient-color">Weather App</span> !
      </h3>
      <main className="mainPage__form">
        <InputField
          city={city}
          change={handleChangeInputText}
          submit={handleSubmitForm}
          clearInput={clearTextInput}
        />

        <div className="mainPage__cards">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
