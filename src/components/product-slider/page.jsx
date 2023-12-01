"use clients"
import Image from 'next/image';
import React, { useState } from 'react';

const ProductSlider = () => {
    const products = [
        {
          image: "/images/butter-chicken-rice-bowl.jpg",
          name: "Butter Chicken Rice Bowl",
          description: "Rice with your choice of toppings & chutneys.",
          price: "$30",
        },
        {
          image: "/images/chicken-hakka-noodles.jpg",
          name: "Chicken Hakka Noodles",
          description: "This dish comes with hakka noodles and chicken in awesome Inchin flavours.",
          price: "$30",
        },
        // Add more products as needed
      ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const currentProduct = products[currentIndex];
  return (
   <>
      <div className="flex flex-row space-x-10 items-center">
        <div
          className="bg-red-500 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-500 hover:text-red-500"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className={`flex flex-row space-x-5 bg-white  p-5 rounded-md`}>
          <div>
            <Image
              src={currentProduct.image}
              width={200}
              height={100}
              alt={currentProduct.name}
              className="shadow-lg rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-3 w-[450px]">
            <h2 className="text-2xl">{currentProduct.name}</h2>
            <div className="flex flex-row justify-between">
              <div className="basis-[75%]">
                <p className="text-base">{currentProduct.description}</p>
              </div>
              <div>
                <span className="text-red-600 text-[20px] font-semibold">{currentProduct.price}</span>
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
          className="bg-red-500 rounded-full p-2 text-white border-2 hover:bg-white 
          hover:border-2 hover:border-red-500 hover:text-red-500"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
 
   </>
  )
}

export default ProductSlider