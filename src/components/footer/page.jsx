import Image from "next/image";
import React from "react";
import Style from "./footer.module.css";
const Footer = () => {
  return (
    <>
        <div className={`mt-5 ${Style.bg_image_food} flex flex-col  justify-center md:px-32 px-2  h-[450px]`}>
          <div className="">
            <p className="  leading-[60px] text-white text-5xl">Are you ready to order with the <br />best deals?</p>
            <button className="bg-red-700 px-6 py-2 text-white rounded-full my-6 font-medium text-[20px] hover:bg-transparent 
            hover:border-2 hover-border-ref-500 border-2 border-red-700 hover:broder-white ">Proceed to Order</button>
            </div>
        </div>
      <div className=" py-20 px-10  bg-black text-white">
        <div className="xl:w-[1280px] mx-auto ">
          <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold">OUR LOCATION</h2>
            <div className="flex flex-col space-y-3 my-10">
            <p>211 Evergreen Square #35,</p>
            <p> Saskatoon, </p>
            <p>SKCanadaS7W0Z2</p>
            </div>
           
          </div>
          <div className="flex flex-col space-y-5 ">
            <h2 className="text-2xl font-semibold">GET IN TOUCH</h2>
            <p className="py-5">Tel: 306-974-0364</p>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold">OPENING HOURS</h2>
            <div className="flex flex-col space-y-3 my-10">
            <p>Mon – 11 am to 2 am</p>
            <p>Tuesday - Closed</p>
            <p>Wed to Sun - 11 am to 2 am</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 ">
            <h2 className="text-2xl font-semibold">Social Links</h2>
            <div className={`flex flex-row space-x-3 py-5 ${Style.bg_image} h-36 w-36`}>
            <p><Image src="/icon/Ellipse 10.svg" width={28} height={28} alt="Instagram"/></p>
            <p><Image src="/icon/Ellipse 9.svg" width={28} height={28} alt="Instagram"/></p>
            <p><Image src="/icon/Ellipse 6.svg" width={28} height={28} alt="Instagram"/></p>
            </div>
          </div>
          </div>
          <div className="border-b-2 border-white"></div>
          <p className="py-3 text-1xl">Copyright 2023 @Tapri</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
