import { Routes, Route } from 'react-router-dom';

import SharedLayout from './layout/SharedLayout';
import MainPage from './pages/MainPage';
import HistoryPage from './pages/HistoryPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

import './styles/App.css';

const App = () => {
  return (
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
  );
};

export default App;
