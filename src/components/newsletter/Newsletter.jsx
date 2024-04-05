import React from "react";
import "./newsletter.css";
function Newsletter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button className="shadow-lg bg-blue-600 text-white font-bold text-sm rounded px-3 py-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
