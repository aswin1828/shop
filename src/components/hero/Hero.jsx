import React from "react";
import "./hero.css";
import hand_icon from "../assests/hand_icon.png";
import arrow_icon from "../assests/arrow.png";
import hero_image from "../assests/hero_image.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="handicon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collectons</p>
          <p>for everyone</p>
        </div>
        <div className="hebuttonro-latest">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
