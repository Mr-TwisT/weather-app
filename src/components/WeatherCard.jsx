import '../styles/WeatherCard.css';

import image from '../assets/icons/logo.svg';

const WeatherCard = ({ data, i }) => {
  const { date, day } = data?.forecast?.forecastday[i];
  const { name } = data?.location;

  return (
    <div className="weatherCard">
      <img
        src={day.condition.icon}
        alt={`${day.condition.text} icon`}
        className="weatherCard__icon"
      />
      <section className="weatherCard__data">
        <div className="mainInfo">
          <h4 className="data__city">{name}</h4>
          <p className="data__temp">{day.avgtemp_c} °C</p>
        </div>
        <div className="details">
          <p className="data__condition">
            Condition: <span className="thin">{day.condition.text}</span>
          </p>
          <p className="data__wind">
            Wind speed: <span className="thin">{day.maxwind_kph} km/h</span>
          </p>
          <p className="data__humidity">
            Humidity: <span className="thin">{day.avghumidity}%</span>
          </p>
          <p className="data__day">
            Day: <span className="thin">{date}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
