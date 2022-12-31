import React from "react";
import Card from "../Card/Card";

const Cards = ({textFirst, textSecond, name, model, size, color, price, discount}) => {
  return (
    <div className="my-container font-medium text-xl py-[26px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 " >
      <p className="w-full  text-base sm:text-sm">Ən çox satılan məhsullar</p>
      <p className="w-full  text-base sm:text-sm order-3 sm:order-none flex justify-center sm:justify-end ">Hamısına bax</p>

      <div className="flex w-full gap-4 sm:gap-6 sm:col-span-2 overflow-auto py-2 invisible-scroll ">
        <Card 
        name={name}
        model={model}
        size={size}
        color={color}
        price={price}
        discount={discount}
        />
        <Card 
        name={name}
        model={model}
        size={size}
        color={color}
        price={price}
        discount={discount}
        />
        <Card 
        name={name}
        model={model}
        size={size}
        color={color}
        price={price}
        discount={discount}
        />
        <Card 
        name={name}
        model={model}
        size={size}
        color={color}
        price={price}
        discount={discount}
        />
       
      </div>
    </div>
  );
};

export default Cards;
