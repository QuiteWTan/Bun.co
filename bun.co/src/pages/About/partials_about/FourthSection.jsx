import React from 'react'
import FourthAbout from '../assets/FourthAbout.jpg'
const FourthSection = () => {
  return (
      <div className='w-full relative h-[600px] max-w-[1300px] self-center py-16 md:px-8 px-4 font-poppins text-center'>
          <img src={FourthAbout} alt="" className='w-full h-full'/>
          <div className='absolute max-w-[600px] w-full  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/30 rounded-md flex flex-col justify-start p-6 backdrop-blur-md '>
            <h1 className='text-xl md:text-4xl font-bold'>The Journey's End</h1>
            <hr className='w-1/6 bg-gray-700 h-1 self-center my-2'/>
            <p className='text-xs md:text-base py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
      </div>
  )
}

export default FourthSection

