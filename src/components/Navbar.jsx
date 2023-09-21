import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

import MenuButton from './MenuButton';
import '../styles/Navbar.css';

import logoIcon from '../assets/icons/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { isDark, setIsDark } = useContext(AppContext);

  const handleClickTheme = () => {
    setIsDark((prevState) => !prevState);

    const app = document.querySelector('.app');
    app.classList.toggle('dark');
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/' className='logoLink'>
          <img src={logoIcon} alt='logo-icon' className='logoIcon' />
          <h2 className='logoName'>Weather App</h2>
        </Link>
      </div>
      <section className='navbar__menu'>
        <MenuButton text='Home' link='/' />
        <MenuButton text='Your History' link='/history' />
        <MenuButton text='About Us' link='/about' />
      </section>
      <div className='navbar__theme'>
        <button className='themeBtn' onClick={handleClickTheme}>
          {isDark ? (
            <FontAwesomeIcon icon={faSun} className='btnSun' />
          ) : (
            <FontAwesomeIcon icon={faMoon} className='btnMoon' />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
