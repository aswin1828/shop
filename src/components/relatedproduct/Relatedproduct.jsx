import React, { useContext } from "react";
import "./relatedproduct.css";
import { Shopcontext } from "../../context/Shopcontext";
import Iteams from "../items/Iteams";
function Relatedproduct() {
  const { alldata } = useContext(Shopcontext);
  return (
    <div className="relatedproducts">
      <h1>Related products</h1>
      <hr />
      <div className="productitem">
        {alldata.map((item, index) => {
          return (
            <Iteams
              key={index}
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

export default Relatedproduct;
