import React from "react";
import "./newcollection.css";
import new_collection from "../assests/new_collections";
import Iteams from "../items/Iteams";
function Newcollection() {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
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

export default Newcollection;
