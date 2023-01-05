import React, {useEffect} from 'react';

import Slider1 from "../components/Carousel/Slider1";
import Slider2 from "../components/Carousel/Slider2";
import Collage from "../components/Collage/Collage";
import Cards from "../components/ProductCards/Cards";
import Pros from "../components/Advantegous/Pros";
import CardsOfTwo from "../components/StaticCardsOfTwo/CardsOfTwo";
import { useSelector } from 'react-redux';
import { getProducts } from '../api/api-items';
import { commerce } from '../commerce';


function Home(props) {

const {products} =useSelector(state=>state)
const {items, error, loading} =useSelector(state=>state.products)

console.log(products)
console.log(items)
  
useEffect(()=>{
  //commerce.products.list().then((product) => console.log(product));
  //commerce.products.retrieve('prod_ypbroEybB3o8n4').then((product) => console.log(product));
  getProducts().then((res)=>console.log(res))
},[])
   
  return (
    <>
     <Slider1/>
      <Cards/>
      <Cards/>
      <CardsOfTwo/>
      <Cards/>
      <Collage/>
      <Pros/>
     <Slider2/>
    </>
  );
};


export default Home;