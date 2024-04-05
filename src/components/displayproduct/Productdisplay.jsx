import React, { useContext } from "react";
import "./Productdisplay.css";
import { Shopcontext } from "../../context/Shopcontext";
function Productdisplay(props) {
  const { product } = props;
  const { addtocart } = useContext(Shopcontext);

  return (
    <div className="Productdisplay">
      <dv className="left">
        <div className="rimagelistight">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="image">
          <img className="mainimg" src={product.image} alt="" />
        </div>
      </dv>
      <div className="right">
        <h1> {product.name} </h1>
        <div className="price">
          <div className="oldprice">${product.old_price} </div>
          <div className="pricenew">${product.new_price} </div>
        </div>
        <div className="diption">
          These t-shirts are a comfortable and durable alternative to standard
          cotton tees. Its designed to be worn all day by the man in demand.
          This classic design will keep you looking presentable on the go with a
          gentle fabric for comfort all day.
        </div>
        <div className="size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addtocart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Productdisplay;
