import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-white w-full py-16">
      <div className="grid lg:grid-cols-3  max-w-[1240px] mx-auto ">
        {" "}
        <div className="lg: col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="ml-auto">
          <div className="flex justify-between items-center flex-col sm:flex-row w-full p-2">
            <input
              className="w-full bg-white text-black rounded h-10 border border-r-emerald-500"
              type="text"
              placeholder="enter your email"
            />
            <button className="bg-[#00df9a] w-[160px]  rounded-md font-medium my-6  py-2 ml-1">
              Send me news
            </button>
          </div>
          <p className="px-2">
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
