import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("nav: ", nav);
  };
  return (
    <div className="text-white flex items-center h-24 max-w-[1240px] mx-auto px-4 justify-between   ">
      <p className="w-full text-3xl font-bold text-[#00df9a]">React.</p>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4 bg-red-500">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav && (
        <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#000300] ease-in-out duration-500">
          <p className="w-full text-3xl font-bold text-[#00df9a] m-4">React.</p>
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-b-gray-100">Home</li>
            <li className="p-4 border-b border-b-gray-100 bg-red-500">
              Company
            </li>
            <li className="p-4 border-b border-b-gray-100">Resources</li>
            <li className="p-4 border-b border-b-gray-100">About</li>
            <li className="p-4 border-b border-b-gray-100">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
