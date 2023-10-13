import React from 'react'
import FirstSection1 from '../home/FirstSection.jpg'
const FirstSection = () => {
  return (
    <div className='max-w-[1200px] w-full flex flex-col-reverse md:flex-row gap-12 px-4 py-6 md:section'>

        <div className='flex flex-col text-5xl md:text-6xl lg:text-8xl font-linden justify-center relative md:max-w-[550px]'>
          <p className='text-xl md:text-3xl lg:text-4xl font-dancing text-gray-600'>Welcome to Bun.co</p>
          <h1 className='text-gray-700 '>HOME</h1>
          <div className='pl-20 md:pl-40 relative w-fit'>
            <h1 className='text-[#BCA37F]'>BAKERY</h1>
            <h1 className='text-xl md:text-3xl lg:text-4xl font-dancing absolute top-[-45%] right-2 md:top-[-40%] md:right-6 text-[#BCA37F]'>with Love</h1>
          </div>

          <div className='flex md:mt-4 font-poppins text-justify justify-end'>
            <div className=' max-w-[400px] flex flex-col'>
              <h1 className='py-2  text-xl font-bold'>Lorem Ipsum Dolor</h1>
              <p className='text-base py-2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <button className='text-lg self-end px-8 mt-2 py-1 border-gray-700 border hover:bg-gray-700 hover:text-white w-fit hover:scale-105 duration-300 transition-all rounded-sm'>Sales</button>
            </div>
          </div>
        </div>

        <div className='w-full md:max-w-[550px] flex justify-center md:justify-end items-end lg:pl-12 max-h-screen pt-24 md:pt-0'>
          <img src={FirstSection1} alt="" className='h-[60vh] min-[600px]:w-[80%] md:h-[600px] w-[90%] md:w-full rounded-t-full  shadow-xl'/>
        </div>
    </div>
  )
}

export default FirstSection
