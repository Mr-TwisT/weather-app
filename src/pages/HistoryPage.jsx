import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/HistoryPage.css';

const HistoryPage = () => {
  const { weatherData } = useContext(AppContext);
  let storedWeatherItem = [];

  useEffect(() => {
    storedWeatherItem = JSON.parse(localStorage.getItem('weatherItem'));
  }, [weatherData]);

  return (
    <div className="historyPage">
      <h3 className="historyPage__headerText">
        Check your history of searched cities below{' '}
        <FontAwesomeIcon icon={faHandPointDown} className="historyPage__icon" />
      </h3>
      <section className="historyPage__info">
        <ul className="infoList">
          {/* <p className="infoText">{storedWeatherItem[0].cloud}</p> */}
          <p className="infoText">asasss</p>
          <p className="infoText">asasss</p>
          <p className="infoText">asasss</p>
          <p className="infoText">asasss</p>
        </ul>
      </section>
    </div>
  );
};

export default HistoryPage;
