import About2 from '../assets/About2.jpg'
import About3 from '../assets/About3.jpg'
import About4 from '../assets/About4.jpg'
import About5 from '../assets/About5.jpg'

import React from 'react'

const SecondSection = () => {
  return (
    <div className='w-full max-w-[1300px] flex flex-col md:flex-row md:container px-4 py-4 lg:px-24 md:max-h-screen gap-12 self-center'> 
        <div className='flex flex-row max-w-[600px] gap-4'>
            <div className='grid grid-rows-5 pt-16 gap-2'>
                <img src={About4} alt="" className='row-span-2 w-full h-full rounded-t-full'/>
                <img src={About3} alt="" className='row-span-3 w-full h-full rounded-b-full'/>
            </div>
            <div className='grid grid-rows-5 pb-16 gap-2'>
                <img src={About2} alt="" className='row-span-3 w-full h-full rounded-t-full'/>
                <img src={About5} alt="" className='row-span-2 w-full h-full rounded-b-full'/>
            </div>
        </div>
        <div className='font-poppins flex justify-center items-center flex-col gap-4 '>
          <div className='border-l-8 border-gray-800 flex flex-col justify-center px-2 py-2  text-gray-600 h-fit '>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Lorem Ipsum Dolor</h1>
            <p className='text-xs md:text-sm py-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className='border-l-8 border-gray-800 flex flex-col justify-center px-2 py-2  text-gray-600 h-fit '>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Lorem Ipsum Dolor</h1>
            <p className='text-xs md:text-sm py-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className='border-l-8 border-gray-800 flex flex-col justify-center px-2 py-2  text-gray-600 h-fit '>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Lorem Ipsum Dolor</h1>
            <p className='text-xs md:text-sm py-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>

        </div>
    </div>
  )
}
export default SecondSection
