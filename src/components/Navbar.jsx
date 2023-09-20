import { useState } from 'react';
import MenuButton from './MenuButton';
import '../styles/Navbar.css';

import logoIcon from '../assets/icons/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClickTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoIcon} alt="logo-icon" className="logoIcon" />
        <h2 className="logoName">Weather App</h2>
      </div>
      <section className="menu">
        <MenuButton text="Home" click={() => {}} />
        <MenuButton text="Popular Cities" click={() => {}} />
        <MenuButton text="About Us" click={() => {}} />
      </section>
      <div className="theme">
        <button className="changeTheme" onClick={handleClickTheme}>
          {isDark ? (
            <FontAwesomeIcon icon={faSun} className="btnSun" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="btnMoon" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
