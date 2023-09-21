import { Link } from 'react-router-dom';
import '../styles/MenuButton.css';

const MenuButton = ({ text, link }) => {
  return (
    <Link to={link} className="menuButton">
      <button className="menuButton__btn">{text}</button>
    </Link>
  );
};

export default MenuButton;
