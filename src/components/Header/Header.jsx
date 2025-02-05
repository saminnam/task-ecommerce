import "./Header.css";
import logo from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container">
      <nav className="nav-bar">
        <img src={logo} alt="logo" width={150} height={80} />
        <ul className="menu-list">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <aside>
          <AiOutlineShoppingCart className="icon" />
          <button className="primary-btn">Sign In</button>
        </aside>
      </nav>
    </div>
  );
};

export default Header;
