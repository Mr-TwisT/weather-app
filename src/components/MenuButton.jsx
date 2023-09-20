import '../styles/MenuButton.css';

const MenuButton = ({ text, click }) => {
  return (
    <>
      <button className="menuButton" onClick={click}>
        {text}
      </button>
    </>
  );
};

export default MenuButton;
