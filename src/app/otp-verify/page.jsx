import React from 'react'
import Image from 'next/image'
const OtpVerfiy = () => {
  return (
    <>
          <div className="flex flex-col space-y-8 text-white border-[1px] w-fit md:w-[600px] my-20 md:mx-auto shadow-xl  mx-2 p-5 rounded-md">
        <div className="flex flex-row justify-between"> 
          <div className="flex flex-col space-y-1">
            <h2 className="text-2xl font-semibold">Send Code</h2>
            <p className=" text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
         
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="input_mobile" className="text-base  ">
            Verification Code
          </label>
          <div className="flex flex-row space-x-3 justify-center ">
         
           <input
            className="border-[1px] border-gray-400 rounded-lg  w-14 p-3  bg-gray-100"
            type="number"
          />
           <input
            className="border-[1px] border-gray-400 rounded-lg  w-14 p-3 bg-gray-100"
            type="number"
          />
           <input
            className="border-[1px] border-gray-400 rounded-lg  w-14 p-3 bg-gray-100"
            type="number"
          />
           <input
            className="border-[1px] border-gray-400 rounded-lg  w-14 p-3 bg-gray-100"
            type="number"
          />
          </div>
          
        </div>
        <div className="flex flex-col space-y-3">
          <button className="bg-red-700 py-3 rounded-full font-semibold hover:bg-white hover:border-red-500 border-2 hover:text-red-500 duration-300 text-white text-[18px]">
           Verify
          </button>
          <p className='text-red-700 hover:text-white cursor-pointer text-[18px]'>Resend Code</p>
        </div>
      </div>
      </>
  )
}

export default OtpVerfiy