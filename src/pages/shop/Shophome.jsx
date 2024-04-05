import React from "react";
import Hero from "../../components/hero/Hero";
import Popular from "../../components/popular/Popular";
import Offer from "../../components/offer/Offer";
import Newcollection from "../../components/newcollection/Newcollection";
import Newsletter from "../../components/newsletter/Newsletter";

function Shophome() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Newcollection />
      <Newsletter />
    </div>
  );
}

export default Shophome;
