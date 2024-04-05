import React from "react";
import "./offer.css";
import Exclusive from "../assests/exclusive_image.png";
function Offer() {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>ONLY ON BESTSELLER PRODUCTS</p>
        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Check now
        </button>
      </div>
      <div className="offer-right">
        <img src={Exclusive} alt="" />
      </div>
    </div>
  );
}

export default Offer;
