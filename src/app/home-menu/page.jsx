import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeMenu = () => {
  return (
    <>
      <div className="my-10 flex flex-col space-y-5">
        <div className="flex justify-center ">
          <h2 className="text-3xl font-semibold">Menu</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1  gap-6 ">
          
          <Link href="/food-detail" className="flex flex-col space-y-5  items-center">
            {" "}
            <div>
            <Image
              src="/images/chilli-chicken.jpg"
              width={500}
              height={300}
              alt="Chilli Chicken"
              className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
            />
            </div>
         <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
          <h2 className="font-semibold text-2xl ">Chilli Chicken</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </Link>
          <Link href="/food-detail" className="flex flex-col space-y-5  items-center">
            {" "}
            <div>
            <Image
              src="/images/bhelpuri.jpg"
              width={500}
              height={300}
              alt="Chilli Chicken"
              className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
            />
            </div>
         <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
          <h2 className="font-semibold text-2xl ">Bhel Puri</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-700 font-semibold">$ 10.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </Link>
          <Link href="/food-detail" className="flex flex-col space-y-5  items-center">
            {" "}
            <div>
            <Image
              src="/images/chilli-chicken.jpg"
              width={500}
              height={300}
              alt="Chilli Chicken"
              className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
            />
            </div>
         <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
          <h2 className="font-semibold text-2xl ">Chilli Chicken</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </Link>
          <Link href="/food-detail" className="flex flex-col space-y-5  items-center">
            {" "}
            <div>
            <Image
              src="/images/bhelpuri.jpg"
              width={500}
              height={300}
              alt="Chilli Chicken"
              className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
            />
            </div>
         <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
          <h2 className="font-semibold text-2xl ">Chilli Chicken</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </Link>
          <div className="flex flex-col space-y-5  items-center">
            {" "}
            <div>
            <Image
              src="/images/chilli-chicken.jpg"
              width={500}
              height={300}
              alt="Chilli Chicken"
              className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
            />
            </div>
         <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
          <h2 className="font-semibold text-2xl ">Chilli Chicken</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
          <div className="flex flex-col space-y-5  items-center">
            {" "}
            <div>
            <Image
              src="/images/bhelpuri.jpg"
              width={500}
              height={300}
              alt="Chilli Chicken"
              className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
            />
            </div>
         <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
          <h2 className="font-semibold text-2xl ">Bhel Puri</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-700 font-semibold">$ 10.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default HomeMenu;
