import { useContext } from 'react';
import { AppContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/HistoryPage.css';

const HistoryPage = () => {
  const { storedData } = useContext(AppContext);

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
                  <p className='infoText'>{weather.cloud}</p>
                </li>
              ))
            : null}
        </ul>
      </section>
    </div>
  );
};

export default HistoryPage;
