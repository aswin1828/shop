import React, { useContext } from "react";
import "./shopcategory.css";
import { Shopcontext } from "../../context/Shopcontext";
import downicon from "../../components/assests/dropdown_icon.png";
import Iteams from "../../components/items/Iteams";
function Shopcategory(props) {
  const { alldata } = useContext(Shopcontext);

  return (
    <div className="shop-category">
      <img className="categorybanner" src={props.banner} alt="" />
      <div className="category-index">
        <p>
          <span>Showing 1-12 out of 32 products</span>
        </p>
        <div className="category-sort">
          Sort by
          <img className="imagesize" src={downicon} alt="" />
        </div>
      </div>

      <div className="category-products">
        {alldata.map((item, index) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="categoryloadmore">Explore more</div>
    </div>
  );
}

export default Shopcategory;
