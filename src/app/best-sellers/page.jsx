"use client";
import Image from "next/image";

import React, { useState } from "react";

const BestSellers = () => {
  const products = [
    {
      image: "/images/butter-chicken-rice-bowl.jpg",
      name: "Butter Chicken Rice Bowl",
      description: "Rice with your choice of toppings & chutneys.",
      price: "$14.99",
    },
    {
      image: "/images/chicken-hakka-noodles.jpg",
      name: "Chicken Hakka Noodles",
      description:
        "This dish comes with hakka noodles and chicken in awesome Inchin flavours.",
      price: "$17.98",
    },
    {
      image: "/images/samosa.jpg",
      name: "Samosa (3 pcs)",
      description:
        "Tasty, fried indian dish samosha.Indian Delicious Deep Fried Breakfast Samosa.",
      price: "$7.99",
    },
    // Add more products as needed
  ];

  const [currentIndex, setCurrentIndex] = useState([0, 1]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => [
      (prevIndex[0] - 1 + products.length) % products.length,
      (prevIndex[1] - 1 + products.length) % products.length,
    ]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => [
      (prevIndex[0] + 1) % products.length,
      (prevIndex[1] + 1) % products.length,
    ]);
  };
  return (
    <>
      <div className=" xl:w-[1280px] mx-auto    flex flex-col space-y-10 items-center py-10">
        <h2 className="text-3xl font-semibold text-white ">Best Sellers</h2>
        {/* <div className="flex flex-row space-x-10 items-center"> 
        <div
              className="bg-red-700 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-700 hover:text-red-700 "
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
        <div className="flex flex-row space-x-5 bg-white  p-5 rounded-md">
          <div>
            <Image
              src="/images/butter-chicken-rice-bowl.jpg"
              width={200}
              height={100}
              alt="butter-chicken-rice-bowl"
              className="shadow-lg rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3 w-[450px]">
            <h2 className="text-2xl">Butter Chicken Rice Bowl</h2>
            <div className="flex flex-row justify-between">
              <div className="basis-[75%]">
                <p className="text-base">Rice with your choice of toppings & chutneys.</p>
              </div>
              <div>
                <span className="text-red-600 text-[20px] font-semibold">
                  $30
                </span>
              </div>
            </div>
            <div className="">
              <button className="bg-red-600 py-2 px-5 text-white rounded-full hover:bg-red-800 duration-500">
                Order Now
              </button>
            
            </div>
          </div>
          
        </div>
        <div className="flex flex-row space-x-5 bg-white  p-5 rounded-md">
          <div>
            <Image
              src="/images/chicken-hakka-noodles.jpg"
              width={200}
              height={100}
              alt="butter-chicken-rice-bowl"
              className="shadow-lg rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3 w-[450px]">
            <h2 className="text-2xl">Chicken Hakka Noodles</h2>
            <div className="flex flex-row justify-between">
              <div className="basis-[75%]">
                <p className="text-base">This dish comes with hakka noodles and chicken in awesome Inchin flavours.</p>
              </div>
              <div>
                <span className="text-red-600 text-[20px] font-semibold">
                  $30
                </span>
              </div>
            </div>
            <div className="">
              <button className="bg-red-600 py-2 px-5 text-white rounded-full hover:bg-red-800 duration-500">
                Order Now
              </button>
            
            </div>
          </div>
          
        </div>
        <div
              className="bg-red-700 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-700 hover:text-red-700"
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
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-10 md:space-x-10 items-center ">
          <div
            className="bg-red-700 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-700 hover:text-red-700"
            onClick={handlePrev}
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
        
            {currentIndex.map((index) => (
              <div
                key={index}
                className={`flex flex-row space-x-5 text-white border-[1px] border-white p-5 rounded-md `}
              >
                <div>
                  <Image
                    src={products[index].image}
                    width={300}
                    height={200}
                    alt={products[index].name}
                    className="shadow-lg rounded-md h-40"
                  />
                </div>
                <div className="flex flex-col space-y-3 md:w-[450px] w-fit">
                  <h2 className="text-2xl line-clamp-1">{products[index].name}</h2>
                  <div className="flex flex-row justify-between">
                    <div className="basis-[75%]">
                      <p className="text-base line-clamp-2">{products[index].description}</p>
                    </div>
                    <div>
                      <span className="text-red-600 text-[20px] font-semibold">
                        {products[index].price}
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <button className="bg-red-600 py-2 px-5 text-white rounded-full hover:bg-red-800 duration-500">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          
          <div
            className="bg-red-700 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-700 hover:text-red-700"
            onClick={handleNext}
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
        </div>
      </div>
    </>
  );
};

export default BestSellers;
