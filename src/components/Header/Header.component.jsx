import "./Header.styles.scss";
import Logo from "../../res/images/Logo.png";

const Header = () => {
  return (
    <div className="container">
      <img src={Logo} alt="Flow Logo" />
    </div>
  );
};

export default Header;
