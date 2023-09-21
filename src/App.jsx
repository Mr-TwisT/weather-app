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
  const [isDark, setIsDark] = useState(false);
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [storedData, setStoredData] = useState(() => {
    const saved = localStorage.getItem('weatherItem');
    const initialValue = JSON.parse(saved);
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
        storedData,
        setStoredData,
      }}
    >
      <div className="app">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
