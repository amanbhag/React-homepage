import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="grid md:grid-cols-3 gap-8 max-w-[1240px]">
        <div className="flex flex-col justify-between items-center shadow-xl p-4 my-4 hover:scale-105">
          <div className="text-center ">
            <img
              className=" w-20 mx-auto mt-[-3rem] pl-5"
              src={Single}
              alt=""
              srcset=""
            />
            <h2 className="text-2xl font-extrabold">Single User</h2>
            <div className="mx-auto font-semibold text-center font-semibold">
              {" "}
              <p className="text-xl">140Rs</p>
            </div>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">unlimited bandwith</p>
              <p className="py-2 border-b mx-8">unlimited ram</p>
              <p className="py-2 border-b mx-8">unlimited storage</p>
            </div>
            <button className="bg-[#00df9a] w-[160px]  rounded-md font-medium my-6  py-2 ml-1">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="flex bg-gray-100 flex-col justify-between items-center shadow-xl p-4 my-8 md:my-0 hover:scale-105">
          <div className="text-center ">
            <img
              className=" w-20 mx-auto mt-[-3rem] pl-5"
              src={Double}
              alt=""
              srcset=""
            />
            <h2 className="text-2xl font-extrabold">Double User</h2>
            <div className="mx-auto font-semibold text-center font-semibold">
              {" "}
              <p className="text-xl">280Rs</p>
            </div>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">unlimited bandwith</p>
              <p className="py-2 border-b mx-8">unlimited ram</p>
              <p className="py-2 border-b mx-8">unlimited storage</p>
            </div>
            <button className="bg-[#00df9a] w-[160px]  rounded-md font-medium my-6  py-2 ml-1">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center shadow-xl p-4 my-4 hover:scale-105">
          <div className="text-center ">
            <img
              className=" w-20 mx-auto mt-[-3rem] pl-5"
              src={Triple}
              alt=""
              srcset=""
            />
            <h2 className="text-2xl font-extrabold">Triple User</h2>
            <div className="mx-auto font-semibold text-center font-semibold">
              {" "}
              <p className="text-xl">420Rs</p>
            </div>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">unlimited bandwith</p>
              <p className="py-2 border-b mx-8">unlimited ram</p>
              <p className="py-2 border-b mx-8">unlimited storage</p>
            </div>
            <button className="bg-[#00df9a] w-[160px]  rounded-md font-medium my-6  py-2 ml-1">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
