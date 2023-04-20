import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={Laptop}
          alt="/"
          className="w-[500px] mx-auto grid md:grid-cols-2"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="font-4xl md:font-5xl text-[#00df9a] ">
            Ai is the future
          </h1>
          <p>
            AI or Artificial Intelligence is a branch of computer science that
            focuses on creating machines capable of performing tasks that
            normally require human intelligence, such as understanding natural
            language, recognizing objects, learning, and problem-solving.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] md:mx-0 rounded-md font-medium my-6 px-6 py-3 mx-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
