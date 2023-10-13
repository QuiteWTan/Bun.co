import React from 'react'
import About1 from '../assets/About1.jpg'
const FirstSection = () => {
  return (
    <div className='relative w-full min-h-screen md:min-h-none md:max-h-[650px]'>
        <img src={About1} alt="" className='md:max-h-[650px] w-full h-screen md:h-full'/>
        <div class="absolute bottom-0 left-0 right-0 h-full md:h-4/5 bg-gradient-to-t from-white to-transparent " ></div>
        <div className='absolute top-[50%] md:top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-cinzel text-center text-gray-800 w-full max-w-[600px] px-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold'>ABOUT US</h1>
            <p className='text-sm md:text-base font-poppins py-4 font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
  )
}

export default FirstSection
