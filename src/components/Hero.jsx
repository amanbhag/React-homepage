import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mx-auto flex flex-col mt-[96px] justify-center items-center w-full h-screen text-center bg-[#000300]">
        <p className="text-[#00df9a] uppercase p-2 font-extrabold text-3xl">
          grow with us
        </p>
        <h1 className="uppercase p-2 md:text-7xl ">
          Grow with ai and fast technology
        </h1>
        <div className="flex justify-center items-center md:text-4xl sm:4xl md:pl-4 text-x ">
          <p className=" ">fast,automatic,correct </p>
          <Typed
            strings={["AI Is the future"]}
            typeSpeed={20}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-light text-gray-100">
          Monitor your future with AI
        </p>
        <button className="bg-[#00df9a] w-[200px]  rounded-md font-medium my-6 px-6 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
