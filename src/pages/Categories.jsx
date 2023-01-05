
import React, { useRef, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";
import Checkbox from "../components/Checkbox/Checkbox";

let arr = ["samsnug", "apple", "banan"]
let arr3 = ["samsnug", "apple", "banan"]


function Categories(props) {
    const [dropdownValue, setDropdownValue]=useState(false)
    const [dropdownValue1, setDropdownValue1]=useState(false)
    
    const dropdownHandler = () => {
        setDropdownValue((prev)=>(!prev))
    }
    const dropdownHandler1 = () => {
        setDropdownValue1((prev)=>(!prev))
    }
    

 const fn = (el) =>{
    console.log(el)
 }

  return (
    <>
   
   <div className="my-container flex">
   <div className="flex  flex-col">

   <Dropdown text={`brendler`} count={arr.length} onClick={dropdownHandler} dropdownValue={dropdownValue} >
       {dropdownValue && arr.map((el,i)=>{
        return  <Checkbox onClick={()=>(fn(el))} text={el} id={"a"+i} placeholder={el}/>
       })}
    </Dropdown>




   </div>



 {/*   <div className="grid  xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[22px] gap-y-8">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

    <Card/>
    </div>
 */}
   </div>
    
    </>
  );
};

export default Categories;