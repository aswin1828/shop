import React, { useContext } from "react";
import { Shopcontext } from "../../context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrums from "../../components/breadcrums/Breadcrums";
import Productdisplay from "../../components/displayproduct/Productdisplay";
import Discription from "../../components/discription/Discription";
import Relatedproduct from "../../components/relatedproduct/Relatedproduct";

function Product() {
  const { alldata } = useContext(Shopcontext);
  const { productid } = useParams();
  const product = alldata.find((e) => e.id === Number(productid));

  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <Discription />
      <Relatedproduct />
    </div>
  );
}

export default Product;
