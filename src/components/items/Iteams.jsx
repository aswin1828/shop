import React from "react";
import "./iteam.css";
import { Link } from "react-router-dom";
function Iteams(props) {
  return (
    <div className="iteam">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p> {props.name} </p>
      <div className="iteampricee">
        <div className="iteampricenew"> ${props.newprice} </div>
        <div className="iteampriceold"> ${props.oldprice} </div>
      </div>
    </div>
  );
}

export default Iteams;
