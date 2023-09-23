import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './layout/SharedLayout';
import MainPage from './pages/MainPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

import './styles/App.css';

export const AppContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('dark'));
    return initialValue || false;
  });
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [counterArray, setCounterArray] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('counter'));
    return initialValue || [1];
  });
  const [storedData, setStoredData] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem('weather'));
    return initialValue || [];
  });

  return (
    <AppContext.Provider
      value={{
        isDark,
        setIsDark,
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
      }}
    >
      <div className='app'>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path='history' element={<HistoryPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
