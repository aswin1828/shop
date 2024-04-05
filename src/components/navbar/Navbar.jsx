import React, { useContext } from "react";
import { useState } from "react";
import "./navbar.css";
import logo from "../assests/logo.png";
import cart_icon from "../assests/cart_icon.png";
import { Link } from "react-router-dom";
import { Shopcontext } from "../../context/Shopcontext";
function Navbar() {
  const [menu, setmenu] = useState("shop");
  const { gettotalitems } = useContext(Shopcontext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>shopify</p>
      </div>
      <ul className="navmenu">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>

          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("women");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kid");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kid
          </Link>
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          login
        </button>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{gettotalitems()} </div>
      </div>
    </div>
  );
}

export default Navbar;
