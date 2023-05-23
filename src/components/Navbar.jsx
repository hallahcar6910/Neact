import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
const[open, setOpen]=useState(false)
const handleClick=()=>{
setOpen(!open)

}

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">NEACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home </li>
        <li className="p-4">Company </li>
        <li className="p-4">Resources </li>
        <li className="p-4">About</li>
        <li className="p-4">Contact </li>
      </ul>
      <div  className="block md:hidden" onClick={handleClick} >
        {open? <AiOutlineMenu size={20} />:<AiOutlineClose size={20} />}
      </div>
      <div className={open ?"fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300]":"fixed left-[-100%]"}>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">NEACT.</h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">Home </li>
          <li className="p-4 border-b border-gray-600">Company </li>
          <li className="p-4 border-b border-gray-600">Resources </li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 ">Contact </li>
        </ul>
      </div>
    </div>
  );
};
