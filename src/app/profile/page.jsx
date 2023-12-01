import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <>
   <div className="xl:w-[1280px] mx-auto">
        <div className="my-10 flex flex-col space-y-5">
        <div className="flex flex-row items-center space-x-2 text-gray-700 font-semibold">
            <Link href="/">Home</Link> <span className="text-2xl">&#8250;</span>{" "}
            <Link href="/menu" className='cursor-pointer'>Profile</Link> 
          </div>
          </div> 
      
    </div>
    </>
  )
}

export default Profile