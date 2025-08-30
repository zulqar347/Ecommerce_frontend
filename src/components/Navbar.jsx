import React from "react";
import "../styles/Navbar.css";
import Login from "../pages/Login";
import { ACCESS_TOKEN, Logout } from "../LoginLogout";

const Navbar = () => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  let count
  if (cart){ count = cart.length}
  else{const count = 0}

  return (
    <nav className="navbar">
      <div className="navbar-logo">ECOMMERCE</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-right">
         <input type="text" placeholder="Search..." className="search-box" />
        { ACCESS_TOKEN ? <LogoutButton onLogout={Logout}/> : <LoginButton/>}
        {ACCESS_TOKEN && <CartButton itemCount={count}/>}
      </div>
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

const CartButton = ({IsloggedIn, itemCount }) => {
  return (
    <a href="/cartpage">
    <button className="cart-btn">
      🛒 Cart {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </button>
    </a>
  );
};

const LogoutButton = ({ onLogout }) => {
  return (
    <button className="logout-btn" onClick={onLogout}>
      Logout
    </button>
  );
};

function LoginButton(){
  return(
          <>
          
        <a href="/login" className="login-btn">Login</a>
        </>
  )
}
