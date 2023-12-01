"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const categories = [
    "Indo Chinese",
    "Tapri Special",
    "Quick Bites",
    "Side Sauce",
    "Desserts",
    "Drinks",
  ];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const menuItems = [
    {
      title: "Chilli Chicken",
      description:
        "Indian Chilli Chicken dry,Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value.",
      buttonText: "Order Now",
      price: "17.96",
      image: "/images/chilli-chicken.jpg",
      category: "Indo Chinese",
    },
    {
      title: "Chilli Chicken",
      description:
        "Indian Chilli Chicken dry,Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value.",
      buttonText: "Order Now",
      price: "17.96",
      image: "/images/chilli-chicken.jpg",
      category: "Indo Chinese",
    },
    {
      title: "Bhel Puri",
      description:
        "Bhel puri is a popular chaat snack made with puffed rice, sweet sour spicy chutneys, veggies & sev. ",
      buttonText: "Order Now",
      price: "19.96",
      image: "/images/bhelpuri.jpg",
      category: "Tapri Special",
    },
    {
      title: "Bhel Puri",
      description:
        "Bhel puri is a popular chaat snack made with puffed rice, sweet sour spicy chutneys, veggies & sev. ",
      buttonText: "Order Now",
      price: "19.96",
      image: "/images/quick-bites.jpg",
      category: "Quick Bites",
    },
    {
      title: "Quick Bites",
      description:
        "Bhel puri is a popular chaat snack made with puffed rice, sweet sour spicy chutneys, veggies & sev. ",
      buttonText: "Order Now",
      price: "$19.96",
      image: "/images/bhelpuri.jpg",
      category: "Tapri Special",
    },
    {
      title: "Side Sauces",
      description:
        "Bhel puri is a popular chaat snack made with puffed rice, sweet sour spicy chutneys, veggies & sev. ",
      buttonText: "Order Now",
      price: "$19.96",
      image: "/images/side-sauce.jpg",
      category: "Side Sauce",
    },
  ];

  const filteredMenu = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <>
      <div className="xl:w-[1280px] mx-auto">
       
        <div className="my-10 flex flex-col space-y-5">
        <div className="flex md:mx-0 mx-auto flex-row items-center space-x-2 text-white font-semibold">
          <h1 >Home</h1> <span className="text-2xl">&#8250;</span> <h1>Menu</h1>
          </div>
          <div className="flex justify-center ">
            <h2 className="text-3xl font-semibold">Menu</h2>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-2 justify-items-center  gap-6 py-6">
            {categories.map((category) => (
              <div
                key={category}
                className={`border-2 cursor-pointer rounded-full px-6 py-2 text-white ${
                  activeCategory === category
                    ? "bg-red-700 border-0 text-white"
                    : "border-red-700 hover:bg-red-700 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <p className="text-[18px]">{category}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center  gap-6 ">
            {filteredMenu.length > 0 ? (
              filteredMenu.map((menuItem, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-5   rounded-xl items-center"
                >
                  <Link href="/food-detail" >

                  
                  <div className="m-2">
                    <Image
                      src={menuItem.image}
                      width={500}
                      height={300}
                      alt={menuItem.title}
                      className="w-full h-[17.5rem] rounded-xl hover:drop-shadow-2xl hover:-translate-y-1
                       hover:scale-110 transition ease-in-out delay-150"
                    />
                  </div>
                  <div className="flex flex-col space-y-6 p-3 bg-black text-white rounded-t-3xl ">
                    <h2 className="font-semibold text-2xl ">
                      {menuItem.title}
                    </h2>
                    <p className="font-normal text-base text-gray-300">
                      {menuItem.description}
                    </p>
                    <div className="flex flex-row justify-between items-center pb-2">
                      <p className="text-[20px] text-red-700 font-semibold">{`$ ${menuItem.price}`}</p>
                      <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">
                        Order Now
                      </button>
                    </div>
                  </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="w-full">
                <div>
                  <p className="text-gray-500 text-lg text-center">
                    No items available in the selected category.
                  </p>
                </div>
              </div>
            )}

            {/* <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
          <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
          <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
          <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
          <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
          <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
              <p className="text-[20px] text-red-700 font-semibold">$ 16.98</p>
              <button className="bg-red-700 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
          <div className="flex flex-col space-y-5  border-2 rounded-xl   items-center">
            {" "}
            <div className="m-2">
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
           */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
