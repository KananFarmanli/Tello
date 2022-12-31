import Carousel from "nuka-carousel/lib/carousel";
import React, { useRef, useEffect } from "react";
import Slider1 from "../Carousel/Slider1";
import Slider2 from "../Carousel/Slider2";
import Collage from "../Collage/Collage";
import Cards from "../ProductCards/Cards";
import Pros from "../Advantegous/Pros";
import CardsOfTwo from "../StaticCardsOfTwo/CardsOfTwo";




const Main = () => {

    



  return (
    <div className="grow">
     <Slider1/>
      <Cards/>
      <Cards/>
      <CardsOfTwo/>
      <Cards/>
      <Collage/>
      <Pros/>
     <Slider2/>
    </div>
  );
};

export default Main;
