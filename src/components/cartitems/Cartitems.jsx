import React from "react";
import "./caritems.css";
import { useContext } from "react";
import { Shopcontext } from "../../context/Shopcontext";
import removeicon from "../assests/cart_cross_icon.png";
function Cartitems() {
  const { alldata, cartitems, removecart, gettotal } = useContext(Shopcontext);
  return (
    <div className="caritems">
      <div className="conatinermain">
        <p>Prducts</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quality</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {alldata.map((e) => {
        if (cartitems[e.id] > 0) {
          return (
            <div>
              <div className="format conatinermain">
                <img src={e.image} className="carticon" alt="" />
                <p> {e.name}</p>
                <p> ${e.new_price} </p>
                <button className="quantity"> {cartitems[e.id]} </button>
                <p> ${e.new_price * cartitems[e.id]} </p>
                <img
                  className="remove"
                  src={removeicon}
                  onClick={() => {
                    removecart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartdown">
        <div className="total">
          <h1>Cart Totals</h1>
          <div>
            <div className="totalitem">
              <p>Subtotal</p>
              <p>${gettotal()} </p>
            </div>
            <hr />
            <div className="totalitem">
              <p>Shipping fee</p>
              <p>Free</p>
              <hr />
              <div className="totalitem">
                <h3>Total</h3>
                <h3>${gettotal()} </h3>
              </div>
            </div>
            <button className="proceed">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
