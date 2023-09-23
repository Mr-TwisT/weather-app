import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

import MenuButton from '../components/MenuButton';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className='errorPage'>
      <h3 className='errorPage__headerText'>ERROR 404:</h3>
      <section className='errorPage__text'>
        <p>Page Not Found</p>
        <FontAwesomeIcon icon={faFaceFrown} className='errorPage__icon' />
      </section>
      <MenuButton text='Back to homepage' link='/' />
    </div>
  );
};

export default ErrorPage;
