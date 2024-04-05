import React from "react";
import "./popular.css";
import data_product from "../assests/data";
import Iteams from "../items/Iteams";

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-iteam">
        {data_product.map((item, i) => {
          return (
            <Iteams
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item.new_price}
              oldprice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
