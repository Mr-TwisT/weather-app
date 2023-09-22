import '../styles/WeatherCard.css';

const WeatherCard = ({ currData, data, i = 0 }) => {
  // const { date, day } = data?.forecast?.forecastday[i];
  // const { name } = data?.location;

  // const { name, localtime } = currData?.location;
  // const { temp_c, condition, wind_kph, humidity } = currData?.current;

  return (
    <div className='weatherCard'>
      <img
        src={
          currData?.current?.condition?.icon ||
          data?.forecast?.forecastday[i]?.day?.condition?.icon
        }
        alt={`${
          currData?.current?.condition?.text ||
          data?.forecast?.forecastday[i]?.day?.condition?.text
        } icon`}
        className='weatherCard__icon'
      />
      <section className='weatherCard__data'>
        <div className='mainInfo'>
          <h4 className='data__city'>
            {currData?.location?.name || data?.location?.name}
          </h4>
          <p className='data__temp'>
            {currData?.current?.temp_c ||
              data?.forecast?.forecastday[i]?.day?.avgtemp_c}{' '}
            °C
          </p>
        </div>
        <div className='details'>
          <p className='data__condition'>
            Condition:{' '}
            <span className='thin'>
              {currData?.current?.condition?.text ||
                data?.forecast?.forecastday[i]?.day?.condition?.text}
            </span>
          </p>
          <p className='data__wind'>
            Wind speed:{' '}
            <span className='thin'>
              {currData?.current?.wind_kph ||
                data?.forecast?.forecastday[i]?.day?.maxwind_kph}{' '}
              km/h
            </span>
          </p>
          <p className='data__humidity'>
            Humidity:{' '}
            <span className='thin'>
              {currData?.current?.humidity ||
                data?.forecast?.forecastday[i]?.day?.avghumidity}
              %
            </span>
          </p>
          <p className='data__day'>
            Day:{' '}
            <span className='thin'>
              {currData?.location?.localtime ||
                data?.forecast?.forecastday[i]?.date}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
