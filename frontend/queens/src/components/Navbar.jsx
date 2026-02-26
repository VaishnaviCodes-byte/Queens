import "../styles/navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import userimg from "../assets/user.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Queens Logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/collections">COLLECTIONS</Link>
      </div>

      <div className="nav-icons">
        <Link to="/cart">
          <span><img src={cart} alt="Cart" /></span>
        </Link>

        {user ? (
          <Link to="/account" className="user-initial">
            <span>{user.name.charAt(0).toUpperCase()}</span>
          </Link>
        ) : (
          <Link to="/account">
            <span><img src={userimg} alt="User" /></span>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;