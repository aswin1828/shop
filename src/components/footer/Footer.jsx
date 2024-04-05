import React from "react";
import "./footer.css";
import footer_logo from "../assests/logo_big.png";
import instagram from "../assests/instagram_icon.png";
import pinster_icon from "../assests/pintester_icon.png";
import whatsapp from "../assests/whatsapp_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPify</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinster_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Copyright @2023 - All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
