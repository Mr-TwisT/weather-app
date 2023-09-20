import { useState } from 'react';
import InputField from '../components/InputField';

import '../styles/MainPage.css';

const MainPage = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState({});

  const handleChangeInputText = (e) => setCity(e.target.value);

  const handleSubmitForm = (e) => {
    e.preventDefault();
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
        />

        <div className="mainPage__cards"></div>
      </main>
    </div>
  );
};

export default MainPage;
