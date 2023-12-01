"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Categories from "./categories/page";
import BestSellers from "./best-sellers/page";
import HomeMenu from "./home-menu/page";
import ClientAndMobile from "./mobile-client/page";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1
    (
      <div className="basis-1/2 flex flex-col md:space-y-16 space-y-10 py-20" key={0} >
        <h1 className="font-semibold text-6xl ">
          Dive into Delights Of Delectable Food
        </h1>
        <p className="text-2xl font-medium text-gray-600">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </p>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-3 ">
          <input
            type="text"
            className="w-96 h-12 border bg-[#F5F5F5] rounded-md pl-3"
            placeholder="Search Food"
          />
          <button className="p-3 bg-red-500 border-2 text-white rounded-md hover:border-2 hover:bg-red-100 hover:border-red-400 hover:text-red-500">
            Order Now
          </button>
        </div>
      </div>
    ),

    // Slide 2
    (
      <div className="flex flex-col md:space-y-16 space-y-10 py-20 " key={1} >
         <h1 className="font-semibold text-6xl ">
         Walk In and Get <span className="text-red-500">15% OFF</span> On Any Food 
        </h1>
        <div className="flex flex-col space-y-3">
        <div className="flex flex-row md:space-x-36 justify-between border-b-2 border-dashed ">
                <span className="">Monday</span>
                <span className="">11:00 AM - 02:00 AM</span>
              </div>
              <div className="flex flex-row md:space-x-36 justify-between border-b-2 border-dashed ">
                <span>Tuesday</span>
                <span className="text-red-500">Closed</span>
              </div>
              <div className="flex flex-row md:space-x-36 justify-between border-b-2 border-dashed ">
                <span>Wednesday</span>
                <span>11:00 AM - 02:00 AM</span>
              </div>
              <div className="flex flex-row md:space-x-36 justify-between border-b-2 border-dashed ">
                <span>Thursday</span>
                <span>11:00 AM - 02:00 AM</span>
              </div>
              <div className="flex flex-row md:space-x-36 justify-between border-b-2 border-dashed ">
                <span>Friday</span>
                <span>11:00 AM - 02:00 AM</span>
              </div>
              <div className="flex flex-row md:space-x-36 justify-between border-b-2 border-dashed ">
                <span>Saturday</span>
                <span>11:00 AM - 02:00 AM</span>
              </div>
        </div>
      
      </div>
    ),

    // Slide 3
    (
      <div className="basis-1/2 flex flex-col md:space-y-16 space-y-10 py-20" key={3} >
      <h1 className="font-semibold text-6xl ">
        Dive into Delights Of Delectable Food
      </h1>
      <p className="text-2xl font-medium text-gray-600">
        Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
      </p>
      <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-6 space-x-0"  >
        <Image src="/images/google-play.png" width={200} height={200} alt="Google play" />
        <Image src="/images/app-store.png" width={200} height={200} alt="Google play" />
      </div>
    </div>
    
    ),
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="xl:w-[1280px] mx-auto min-h-screen">
        {/* Hero Section */}
         <div className="flex md:flex-row flex-col md:p-0 p-5 space-x-12 items-center">
          <div className="basis-1/2">
            {slides[currentSlide]}
          </div>
          <div className="basis-1/2">
            <Image src="/bg.png" width={800} height={1000} alt="Hero Image" />
          </div>
        </div>
        <Categories />
      </div>

      <div className="bg-gray-950">
        <BestSellers />
      </div>
      <div className="xl:w-[1280px] mx-auto min-h-screen">
        <HomeMenu />
        <div id="mobileclient">
        <ClientAndMobile />
        </div>
      </div>
    </>
  );
}
