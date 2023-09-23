import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';

import InputField from '../components/InputField';
import WeatherCard from '../components/WeatherCard';

import '../styles/MainPage.css';

const MainPage = () => {
  const {
    city,
    setCity,
    weatherData,
    setWeatherData,
    currentWeatherData,
    setCurrentWeatherData,
    counterArray,
    setCounterArray,
    storedData,
    setStoredData,
  } = useContext(AppContext);

  const isMounted = useRef(false);

  const handleChangeInputText = (e) => setCity(e.target.value.toUpperCase());

  const clearTextInput = () => setCity('');

  const handleSubmitForm = (e) => {
    e.preventDefault();

    city && getData();
    city && counterOfSearchedCities();
    clearTextInput();
  };

  const counterOfSearchedCities = () => {
    const storageItems = JSON.parse(localStorage.getItem('weather'));
    let counter = 0;

    if (storageItems.length > 0) {
      const result = storageItems.filter(
        (item) => item.location.name.toUpperCase() === city
      );
      if (result.length > 0) counter = result.length;
      counter++;

      setCounterArray((prevState) => [...prevState, counter]);
    }
  };

  const fetchFunc = async (url, setState, info) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status === 200) {
        console.log(`Successfully getted data! [${info}]`);
        setState(data);
      } else if (data.error.code === 1006) {
        alert(data.error.message + ` [${info}]`); //zrobić coś lepszego
      } else {
        console.log('Server Error!', data.error.message, ` [${info}]`);
      }
    } catch (error) {
      console.log('Fetch Error!', error, ` [${info}]`);
    }
  };

  const getData = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url1 = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;
    const url2 = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetchFunc(url1, setWeatherData, 'Fetch forecast weather');
    fetchFunc(url2, setCurrentWeatherData, 'Fetch current weather');
  };

  useEffect(() => {
    if (isMounted.current) {
      if (
        Object.keys(currentWeatherData).length > 0 &&
        currentWeatherData !== storedData[storedData.length - 1]
      ) {
        setStoredData((prevState) => {
          return [...prevState, currentWeatherData];
        });
      }
    } else {
      isMounted.current = true;
    }
  }, [currentWeatherData]);

  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(storedData));
  }, [storedData]);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counterArray));
  }, [counterArray]);

  return (
    <div className='mainPage'>
      <h3 className='mainPage__welcomeText'>
        Check the weather of the whole world
        <br />
        with our <span className='gradient-color'>Weather App</span> !
      </h3>
      <main className='mainPage__form'>
        <InputField
          city={city}
          change={handleChangeInputText}
          submit={handleSubmitForm}
          clearInput={clearTextInput}
        />

        <div className='mainPage__cards'>
          {Object.keys(weatherData).length > 0 ? (
            <>
              <WeatherCard currData={currentWeatherData} />
              <WeatherCard data={weatherData} i={1} />
              <WeatherCard data={weatherData} i={2} />
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
