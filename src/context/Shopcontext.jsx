import React, { createContext, useState } from "react";

import alldata from "../components/assests/all_product";

export const Shopcontext = createContext(null);

const getDefaultcart = () => {
  let cart = {};
  for (let index = 0; index < alldata.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopcontextProvider = (props) => {
  const [cartitems, setcartitems] = useState(getDefaultcart());

  const addtocart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartitems);
  };
  const removecart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const gettotal = () => {
    let totalamout = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = alldata.find((product) => product.id === Number(item));
        totalamout += iteminfo.new_price * cartitems[item];
      }
    }
    return totalamout;
  };
  const gettotalitems = () => {
    let totalitem = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        totalitem += cartitems[item];
      }
    }
    return totalitem;
  };
  const contextvalue = {
    alldata,
    addtocart,
    removecart,
    cartitems,
    gettotal,
    gettotalitems,
  };

  return (
    <Shopcontext.Provider value={contextvalue}>
      {props.children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
