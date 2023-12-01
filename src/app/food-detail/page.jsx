import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodDetail = () => {
  return (
    <>
      <div className="xl:w-[1280px] mx-auto">
        <div className="my-10 flex flex-col space-y-5">
        <div className="flex mx-auto md:mx-0 flex-row items-center space-x-2 text-gray-700 font-semibold">
            <Link href="/">Home</Link> <span className="text-2xl">&#8250;</span>{" "}
            <Link href="/menu" className='cursor-pointer'>Menu</Link>
            <span className="text-2xl">&#8250;</span> <Link href="/food-detail" className='cursor-pointer'>Chilli Chicken</Link>
           
          </div>
          
          <div className="flex md:flex-row flex-col md:space-x-16 space-x-0 md:mx-0  mx-2">
            <div>
              <Image
                src="/images/chilli-chicken.jpg"
                width={600}
                height={700}
                className="rounded-lg h-full"
                alt="Chilli"
           
              />
            <p className="my-2 text-gray-500 text-center">You will get 20 rewards points on this dish</p>
            </div>
            <div className="flex flex-col space-y-5 px-5 md:px-0 basis-[40%]">
              <h1 className="text-3xl font-semibold">Chilli Chicken</h1>
              <p className="text-base text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industryLorem Ipsum is simply dummy text of the printing
              </p>
              <span className="text-red-500 font-semibold text-2xl">
                $ 19.78
              </span>
              <div className="flex-col flex space-y-2">
              <label className="text-gray-700 text-base">Choose Level of Spiciness </label>
             <select className="h-12 bg-gray-200 px-2 rounded-lg text-gray-600 border-none"> 
                <option>Less</option>
                <option>Mid</option>
                <option>High</option>
             </select>
              </div>
              <div className="flex-col flex space-y-2">
              <label className="text-gray-700 text-base">Quantity  </label>
             <input type="number" placeholder="1"  className="h-12 bg-gray-200 px-2 rounded-lg text-gray-600 border-none"/>
              </div>
              <div className="flex-col flex space-y-2">
              <label className="text-gray-700 text-base">Comment </label>
              <input type="text" placeholder="Type here..."  className="h-12 bg-gray-200 px-2 rounded-lg text-gray-600 border-none"/>
              </div>
             <Link href="/cart" className="text-center cursor-pointer text-white text-[18px] bg-red-500 w-full py-3 rounded-full hover:bg-red-800">Add to Cart</Link>
            </div> 
          </div>
          
        </div>
        <div className="pt-14 text-center text-3xl font-semibold">Related Recipes</div>
        <div className=" py-10 grid md:grid-cols-3 grid-cols-1  gap-6 ">
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
              <p className="text-[20px] text-red-500 font-semibold">$ 16.98</p>
              <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
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
              <p className="text-[20px] text-red-500 font-semibold">$ 10.98</p>
              <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
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
              <p className="text-[20px] text-red-500 font-semibold">$ 16.98</p>
              <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
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
          <h2 className="font-semibold text-2xl ">Chilli Chicken</h2>
          <p className="font-normal text-base text-gray-300">Chicken is rich in proteins and adding capsicum and onions to it only adds up the nutritional value, making it a healthy lunch option</p>
             <div className="flex flex-row justify-between items-center pb-2">
              <p className="text-[20px] text-red-500 font-semibold">$ 16.98</p>
              <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
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
              <p className="text-[20px] text-red-500 font-semibold">$ 16.98</p>
              <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
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
              <p className="text-[20px] text-red-500 font-semibold">$ 10.98</p>
              <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-800">Order Now</button>
             </div>
             </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
