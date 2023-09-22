import { useContext } from 'react';
import { AppContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/HistoryPage.css';

const HistoryPage = () => {
  const { storedData, counterArray } = useContext(AppContext);

  return (
    <div className='historyPage'>
      <h3 className='historyPage__headerText'>
        Check your history of searched cities below{' '}
        <FontAwesomeIcon icon={faHandPointDown} className='historyPage__icon' />
      </h3>
      <section className='historyPage__info'>
        <ul className='infoList'>
          {storedData.length > 0
            ? storedData.map((weather, index) => (
                <li key={index}>
                  <p className='infoText'>
                    {weather.location.name} |{' '}
                    {weather.location.localtime.slice(0, 10)} |{' '}
                    {weather.current.temp_c}°C | searched: {counterArray[index]}{' '}
                    times
                  </p>
                </li>
              ))
            : null}
        </ul>
      </section>
    </div>
  );
};

export default HistoryPage;
