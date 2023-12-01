"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="xl:w-[1280px] mx-auto">
        <div className="my-10 flex flex-col space-y-5">
          <div className="flex md:mx-0 mx-auto flex-row items-center space-x-2 text-gray-700 font-semibold">
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
            <span className="text-2xl">&#8250;</span>
            <Link href="/cart">Checkout</Link>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 my-10">
            <div className="basis-[70%]  flex flex-col space-y-8 ">
          
              <div className=" mx-auto md:mx-0  ">
                <h2 className="text-3xl font-semibold">Address</h2>
               
              </div>
              <div className="flex flex-row mx-5 md:mx-0 space-x-3">
                <div className="md:basis-[38%] basis-[50%] flex flex-col  fill-white rounded-md p-5 space-y-5 bg-red-500 text-white">
                <svg
                    width="26"
                    height="32"
                    viewBox="0 0 26 32"
                   
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5714 0C9.2385 0.00393197 6.04319 1.32968 3.68644 3.68643C1.32969 6.04318 0.00394534 9.23849 1.33747e-05 12.5714C-0.0039785 15.2951 0.885705 17.9449 2.53258 20.1143C2.53258 20.1143 2.87544 20.5657 2.93144 20.6309L12.5714 32L22.216 20.6251C22.2663 20.5646 22.6103 20.1143 22.6103 20.1143L22.6114 20.1109C24.2575 17.9424 25.1468 15.2939 25.1429 12.5714C25.1389 9.23849 23.8132 6.04318 21.4564 3.68643C19.0997 1.32968 15.9044 0.00393197 12.5714 0ZM12.5714 17.1429C11.6673 17.1429 10.7835 16.8747 10.0317 16.3724C9.27992 15.8701 8.69399 15.1562 8.34799 14.3208C8.00199 13.4855 7.91146 12.5664 8.08785 11.6796C8.26424 10.7928 8.69963 9.97827 9.33895 9.33894C9.97828 8.69961 10.7928 8.26423 11.6796 8.08784C12.5664 7.91145 13.4855 8.00198 14.3209 8.34798C15.1562 8.69398 15.8701 9.27991 16.3724 10.0317C16.8748 10.7834 17.1429 11.6673 17.1429 12.5714C17.1414 13.7834 16.6592 14.9453 15.8023 15.8022C14.9453 16.6592 13.7834 17.1413 12.5714 17.1429Z"
                      
                    />
                  </svg>
                  <p>
                    Dno. 12-34-12, XYC Apartments, DOOR Colony, Saskatoon.,
                    Canada
                  </p>
                </div>
                <div className="md:basis-[38%] basis-[50%] text-gray-800 hover:fill-white hover:text-white hover:bg-red-500 flex flex-col rounded-md p-5 space-y-5 border-2 border-red-500 border-dashed ">
                  <svg
                    width="26"
                    height="32"
                    viewBox="0 0 26 32"
                   
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5714 0C9.2385 0.00393197 6.04319 1.32968 3.68644 3.68643C1.32969 6.04318 0.00394534 9.23849 1.33747e-05 12.5714C-0.0039785 15.2951 0.885705 17.9449 2.53258 20.1143C2.53258 20.1143 2.87544 20.5657 2.93144 20.6309L12.5714 32L22.216 20.6251C22.2663 20.5646 22.6103 20.1143 22.6103 20.1143L22.6114 20.1109C24.2575 17.9424 25.1468 15.2939 25.1429 12.5714C25.1389 9.23849 23.8132 6.04318 21.4564 3.68643C19.0997 1.32968 15.9044 0.00393197 12.5714 0ZM12.5714 17.1429C11.6673 17.1429 10.7835 16.8747 10.0317 16.3724C9.27992 15.8701 8.69399 15.1562 8.34799 14.3208C8.00199 13.4855 7.91146 12.5664 8.08785 11.6796C8.26424 10.7928 8.69963 9.97827 9.33895 9.33894C9.97828 8.69961 10.7928 8.26423 11.6796 8.08784C12.5664 7.91145 13.4855 8.00198 14.3209 8.34798C15.1562 8.69398 15.8701 9.27991 16.3724 10.0317C16.8748 10.7834 17.1429 11.6673 17.1429 12.5714C17.1414 13.7834 16.6592 14.9453 15.8023 15.8022C14.9453 16.6592 13.7834 17.1413 12.5714 17.1429Z"
                      
                    />
                  </svg>
                 
                  <p className="">Deliver on another address</p>
                </div>
              </div>
              <h2 className="text-3xl  mx-auto md:mx-0 font-semibold">Payment</h2>
              <div className="border-2 p-5 flex flex-col space-y-5 border-gray-300 rounded-lg">
                <div className="flex flex-row space-x-5 border-2 p-3 rounded-md">
                  <div className=" flex flex-col space-y-3 items-center border-r-2 pr-5">
                    <Image
                      src="/icon/dollar.svg"
                      width={15}
                      height={15}
                      alt="Dollar"
                    />
                    <h1>Cash on Delivery</h1>
                    <input type="radio" />
                  </div>
                  <div className=" flex flex-col items-center space-y-3">
                    <Image
                      src="/icon/creditcard.svg"
                      width={30}
                      height={30}
                      alt="Dollar"
                    />
                    <h1>Debid/Credit Card</h1>
                    <input type="radio" />
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="outline-none w-full h-12 border-2 border-gray-300 p-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Card Number</label>
                  <input
                    type="text"
                    className="outline-none w-full h-12 border-2 border-gray-300 p-3 rounded-md"
                  />
                </div>
                <div className="flex flex-row space-x-4">
                  <div className=" basis-1/2 flex flex-col space-y-3">
                    <label>Expire Date</label>
                    <input
                      type="text"
                      className="outline-none w-full h-12 border-2 border-gray-300 p-3 rounded-md"
                    />
                  </div>
                  <div className=" basis-1/2 flex flex-col space-y-3">
                    <label>CVV</label>
                    <input
                      type="text"
                      className="outline-none w-full h-12 border-2 border-gray-300 p-3 rounded-md"
                    />
                  </div>
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

export default Checkout;
