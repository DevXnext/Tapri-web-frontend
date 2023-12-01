import Image from "next/image";
import React from "react";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <div className="xl:w-[1280px] mx-auto">
      <div className="flex flex-col space-y-5 md:mx-auto mx-2 md:w-[600px] w-fit my-20 shadow-xl p-4 rounded-md">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col space-y-1">
            <h2 className="text-2xl font-semibold">Sign In</h2>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
       
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="input_mobile" className="text-base ">
            Mobile Number
          </label>
          <input
            className="border-[1px] border-gray-400 rounded-lg  p-3"
            type="number"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Link href="/otp-verify" className=" text-center bg-red-500 py-3 rounded-full font-semibold hover:bg-white hover:border-red-500 border-2 hover:text-red-500 duration-300 text-white text-[18px]">
            Sign In
          </Link>
          <p className="font-semibold  text-[18px]">
          New to Tapri? <b className="text-red-500 hover:text-gray-700 cursor-pointer">Create account</b>
          </p>
        </div>
      </div>
      

  </div>
    </>
  );
};

export default Login;
