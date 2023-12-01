import Image from 'next/image'
import React from 'react'

const AddFranchise = () => {
  return (
    <div className='flex flex-col space-y-5 items-center justify-center h-screen'>
      
      <Image src="/images/franchie.jpg" width={500} height={500} alt="Franchise" className='rounded-lg shadow-xl'/>
      <h2 className='text-2xl '>
        We are Working on Franchise..
        </h2>
      
      </div>
  )
}

export default AddFranchise