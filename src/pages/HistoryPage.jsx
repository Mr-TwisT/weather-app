import { useContext, useEffect } from 'react';
import { AppContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/HistoryPage.css';

const HistoryPage = () => {
  const {} = useContext(AppContext);

  // const storedWeatherItem = JSON.parse(localStorage.getItem('weatherItem'));

  // const [storedData, setStoredData] = useState(initStoredData);

  // useEffect(() => {
  //   setStoredData((prevState) => {
  //     return {
  //       ...prevState,
  //       storedWeatherItem,
  //     };
  //   });
  //   storedData.data.push(storedWeatherItem);
  // }, []);

  // console.log(storedData);

  return (
    <div className="historyPage">
      <h3 className="historyPage__headerText">
        Check your history of searched cities below{' '}
        <FontAwesomeIcon icon={faHandPointDown} className="historyPage__icon" />
      </h3>
      <section className="historyPage__info">
        <ul className="infoList">
          <p className="infoText">asasss</p>
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
