import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <>
      <div className="flex flex-col space-y-3 text-white my-3">
        <div className="flex flex-row justify-between">
          <div className="">
            <h2 className="text-3xl font-semibold ">Popular Categories</h2>
          </div>
          {/* <div className="flex flex-row space-x-3 items-center">
            <span className="text-red-500 font-semibold text-[19px]">
              View All{" "}
            </span>
            <div
              className="bg-red-500 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div
              className="bg-red-500 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-500 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div> */}
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-6  py-5">

          <div className="flex flex-col space-y-5 border-[1px] shadow-xl p-6 justify-center rounded-[30px] 
          hover:shadow-gray-800 shadow-gray-900">
            <div className="">
              <Image
                src="/images/indo-chinese.jpg"
                width="700"
                height="500"
                alt="Popular Categories" className=" w-36 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center"><h1 className="text-[20px]">Indo Chinese</h1>
            <span className="text-gray-200 text-base">(86 Dishes)</span></div>
          </div>

          <div className="flex flex-col space-y-5 border-[1px] shadow-xl p-6 justify-center rounded-[30px] 
          hover:shadow-gray-800 shadow-gray-900">
            <div className="">
              <Image
                src="/images/tapri-special.jpg"
                width="140"
                height="150"
                alt="Popular Categories" className=" w-36 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center"><h1 className="text-[20px]">Tapri Special</h1>
            <span className="text-gray-500 text-base">(50 Dishes)</span></div>
          </div>
          <div className="flex flex-col border-[1px] space-y-5 shadow-xl p-6 justify-center rounded-[30px] 
          hover:shadow-gray-800 shadow-gray-900">
            <div className="">
              <Image
                src="/images/quick-bites.jpg"
                width="140"
                height="150"
                alt="Popular Categories" className=" w-36 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center"><h1 className="text-[20px]">Quick Bites</h1>
            <span className="text-gray-500 text-base">(100 Dishes)</span></div>
          </div>
          <div className="flex flex-col border-[1px] space-y-5 shadow-xl p-6 justify-center rounded-[30px] 
          hover:shadow-gray-800 shadow-gray-900">
            <div className="">
              <Image
                src="/images/side-sauce.jpg"
                width="140"
                height="150"
                alt="Popular Categories" className=" w-36 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center"><h1 className="text-[20px]">Side Sauce</h1>
            <span className="text-gray-500 text-base">(25 Dishes)</span></div>
          </div>
          <div className="flex flex-col border-[1px] space-y-5 shadow-xl p-6 justify-center rounded-[30px] 
          hover:shadow-gray-800 shadow-gray-900">
            <div className="">
              <Image
                src="/images/deserts.jpg"
                width="140"
                height="150"
                alt="Popular Categories" className=" w-36 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center"><h1 className="text-[20px]">Desserts</h1>
            <span className="text-gray-500 text-base">(50 Dishes)</span></div>
          </div>
          <div className="flex flex-col border-[1px] space-y-5 shadow-xl p-6 justify-center rounded-[30px] 
          hover:shadow-gray-800 shadow-gray-900">
            <div className="">
              <Image
                src="/images/drinks.png"
                width="140"
                height="150"
                alt="Popular Categories" className=" w-36 h-32 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center"><h1 className="text-[20px]">Drinks</h1>
            <span className="text-gray-500 text-base">(86 Dishes)</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
