"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CART = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="xl:w-[1280px] mx-auto">
        <div className="my-10 flex flex-col space-y-5">
          <div className="flex mx-auto md:mx-0 flex-row items-center space-x-2 text-gray-700 font-semibold">
            <Link href="/">Home</Link> <span className="text-2xl">&#8250;</span>{" "}
            <Link href="/menu" className="cursor-pointer">
              Menu
            </Link>
            <span className="text-2xl">&#8250;</span>{" "}
            <Link href="/food-detail" className="cursor-pointer">
              Chilli Chicken
            </Link>
            <span className="text-2xl">&#8250;</span>
            <Link href="/cart">Cart</Link>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 my-10">
            <div className="basis-[70%]  flex flex-col space-y-3 ">
              <div className="flex flex-col mx-auto md:mx-0 md:items-start items-center space-y-2 ">
                <h2 className="text-3xl font-semibold">Your Cart</h2>
                <p className="text-gray-500">You have 3 item in your cart</p>
              </div>
              <div className="border-[1px] md:py-2 py-5 p-2 rounded-xl flex flex-col space-y-3  md:flex-row items-center justify-between shadow-sm ">
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
                  <Image
                    src="/images/chilli-chicken.jpg"
                    width={150}
                    height={100}
                    alt="chilli-chicken"
                    className="rounded-lg"
                  />
                  <div className="flex flex-col space-y-2 justify-center">
                    <h1 className="font-semibold text-1xl">Chilli Chicken</h1>
                    <p className="text-gray-400">Extra cheese and toping</p>
                  </div>
                </div>
                <div className="flex flex-row  space-x-5 justify-center items-center">
                  <input
                    type="number"
                    className="w-12 text-gray-800 p-3 bg-gray-100 rounded-md"
                    placeholder="1"
                  />

                  <h1 className="font-semibold text-1xl text-red-500">
                    $11.99
                  </h1>
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
              <div className="border-[1px] md:py-2 py-5 p-2 rounded-xl flex flex-col space-y-3  md:flex-row items-center justify-between shadow-sm ">
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
                  <Image
                    src="/images/chilli-chicken.jpg"
                    width={150}
                    height={100}
                    alt="chilli-chicken"
                    className="rounded-lg"
                  />
                  <div className="flex flex-col space-y-2 justify-center">
                    <h1 className="font-semibold text-1xl">Chilli Chicken</h1>
                    <p className="text-gray-400">Extra cheese and toping</p>
                  </div>
                </div>
                <div className="flex flex-row  space-x-5 justify-center items-center">
                  <input
                    type="number"
                    className="w-12 text-gray-800 p-3 bg-gray-100 rounded-md"
                    placeholder="1"
                  />

                  <h1 className="font-semibold text-1xl text-red-500">
                    $11.99
                  </h1>
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
              <div className="border-[1px] md:py-2 py-5 p-2 rounded-xl flex flex-col space-y-3  md:flex-row items-center justify-between shadow-sm ">
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
                  <Image
                    src="/images/chilli-chicken.jpg"
                    width={150}
                    height={100}
                    alt="chilli-chicken"
                    className="rounded-lg"
                  />
                  <div className="flex flex-col space-y-2 justify-center">
                    <h1 className="font-semibold text-1xl">Chilli Chicken</h1>
                    <p className="text-gray-400">Extra cheese and toping</p>
                  </div>
                </div>
                <div className="flex flex-row  space-x-5 justify-center items-center">
                  <input
                    type="number"
                    className="w-12 text-gray-800 p-3 bg-gray-100 rounded-md"
                    placeholder="1"
                  />

                  <h1 className="font-semibold text-1xl text-red-500">
                    $11.99
                  </h1>
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="basis-[30%] border-2 h-fit p-5 md:p-2 flex-col py-5 flex space-y-3 rounded-xl">
              <h1 className="text-2xl ">Order Summary</h1>
              <p className="text-1xl font-semibold">Bill Details</p>
              <div className="flex flex-row space-x-5 justify-between">
                <h1 className="text-gray-500 text-1xl">Item Total</h1>
                <p className="text-gray-500">$30.60</p>
              </div>
              <div className="flex flex-row space-x-5 justify-between">
                <h1 className="text-gray-500 text-1xl">Tax and Charges </h1>
                <p className="text-gray-500">$2.60</p>
              </div>
              <hr />
              <div className="flex flex-row space-x-5 justify-between">
                <h1 className="text-gray-800 text-1xl">
                  Walk-In{" "}
                  <span className="text-gray-400 text-[13px]">
                    (no delivery charges)
                  </span>
                </h1>
                <input
                  type="radio"
                  name="deliveryOption"
                  className="bg-red-300"
                  checked={selectedOption === "walk-in"}
                  onChange={() => handleOptionChange("walk-in")}
                />
              </div>
              <div className="flex flex-row space-x-5 justify-between">
                <h1 className="text-gray-800 text-1xl">Home Delivery</h1>
                <input
                  type="radio"
                  name="deliveryOption"
                  className="bg-red-300"
                  checked={selectedOption === "home-delivery"}
                  onChange={() => handleOptionChange("home-delivery")}
                />
              </div>
              {selectedOption === "home-delivery" && (
                <div className="flex flex-row space-x-5 justify-between">
                  <h1 className="text-gray-800 text-1xl">Delivery Charges</h1>
                  <p className="text-gray-500">$5.00</p>
                </div>
              )}{" "}
              <hr />
              <div>
                <div className="flex flex-row items-center">
                  <input
                    className="border-[1px] border-gray-400 rounded-full w-full h-10 p-3"
                    placeholder="TAPRI789"
                  />
                  <button className="bg-red-500 px-5 hover:bg-red-800 text-white h-8 rounded-full -ml-[5.5rem] ">
                    Apply
                  </button>
                </div>
                <div className="flex flex-row space-x-5 justify-between my-6">
                  <h1 className="text-[22px] font-semibold">Total</h1>
                  <p className="text-[22px] font-semibold text-red-500">
                    $33.20
                  </p>
                </div>
                <Link href="/checkout">
                  <button className="bg-red-500 w-full text-white rounded-full py-3  justify-center space-x-10 flex flex-row  hover:bg-red-800">
                    Continue
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
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CART;
