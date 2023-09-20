import '../styles/WeatherCard.css';

import image from '../assets/icons/logo.svg';

const WeatherCard = () => {
  return (
    <div className="weatherCard">
      <img src={image} alt="aaa" className="weatherCard__icon" />
      <section className="weatherCard__data">
        <div className="mainInfo">
          <h4 className="data__city">{'London'}</h4>
          <p className="data__temp"> | {'27'}</p>
        </div>
        <div className="details">
          <p className="data__wind">
            Wind speed: <span className="thin">{'11 km'}</span>
          </p>
          <p className="data__type">
            Sky: <span className="thin">{'Cloudy'}</span>
          </p>
          <p className="data__type">
            Sky: <span className="thin">{'Cloudy'}</span>
          </p>
          <p className="data__day">
            Day: <span className="thin">{'Monday'}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
