import Image from "next/image";
import React from "react";

const ClientAndMobile = () => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex md:flex-row flex-col text-white md:space-y-0 space-y-8 space-x-5 justify-center ">
          <div className="basis-[50%]">
            <Image
              src="/images/client.png"
              width={700}
              height={500}
              alt="Client"
            />
          </div>
          <div className="flex flex-col space-y-8 justify-center md:pl-1 pl-6 basis-[50%]">
            <h2 className="font-semibold text-5xl leading-[60px]">What Our Customers Say About Us</h2>
            <p>
              “Tapri is the best. Besides the many and delicious meals, the
              service is also very good, especially in the very fast delivey. I
              highly recommend Tapri to you”.
            </p>
            <div className="flex flex-row space-x-3 items-center">
            <Image src="/images/rating.png" width={150} height={150} alt="Rating"/> <span>4.8</span>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col text-white md:space-y-0 space-y-8 space-x-5 justify-center ">
       
          <div className="flex flex-col space-y-8 justify-center md:pl-1 pl-6 basis-[50%]">
            <h2 className="font-semibold text-5xl leading-[60px]">It’s Now More Easy to Order by Our Mobile App</h2>
            <p>
            All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery
            </p>
            <div className="flex flex-row space-x-3 items-center">
            <Image src="/images/google-play.png" width={150} height={150} alt="Rating"/>
            <Image src="/images/app-store.png" width={150} height={150} alt="Rating"/>

            </div>
            <div>

            </div>
          </div>
          <div className="basis-[50%]">
            <Image
              src="/images/mobile.png"
              width={700}
              height={500}
              alt="Client"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientAndMobile;
