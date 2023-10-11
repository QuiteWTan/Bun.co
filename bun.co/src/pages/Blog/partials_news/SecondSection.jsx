import React from 'react'
import News1 from '../news_assets/News1.jpg'
import News2 from '../news_assets/News2.jpg'
import News3 from '../news_assets/News3.jpg'
import News4 from '../news_assets/News4.jpg'

const SecondSection = () => {
  return (
    <div className='w-full max-w-[1300px] self-center font-poppins py-12 px-4 flex flex-col items-center '>
      <h1 className='font-poppins text-2xl md:text-5xl font-bold'>Recent News</h1>

      <div className='py-8 flex flex-wrap gap-4 justify-center'>
        <div className='rounded-md overflow-hidden shadow-xl max-w-[300px]'>
          <div className='relative max-h-[400px] h-full w-full ' >
            <img src={News1} alt="" className='max-h-[400px] h-full w-full' />
            <h1 className='bg-gray-50 absolute bottom-0 px-2 py-2 text-[#cdb38d] font-bold  text-lg rounded-se-sm'>New Menu : <br /><span className='text-gray-800'>Chocolate Creme Cookies</span></h1>
          </div>
          <p className='bg-gray-50 text-xs md:text-sm p-2 text-justify font-bold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='rounded-md overflow-hidden shadow-xl max-w-[300px]'>
          <div className='relative max-h-[400px] h-full'>
            <img src={News2} alt="" className='max-h-[400px] h-full w-full' />
            <h1 className='bg-gray-50 absolute bottom-0 px-2 py-2 text-[#cdb38d] font-bold  text-lg rounded-se-sm'>New Menu : <br /><span className='text-gray-800'>Chocolate Creme Cookies</span></h1>
          </div>
          <p className='bg-gray-50 text-xs md:text-sm p-2 text-justify font-bold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='rounded-md overflow-hidden shadow-xl max-w-[300px]'>
          <div className='relative max-h-[400px] h-full '>
            <img src={News3} alt="" className='max-h-[400px] h-full w-full' />
            <h1 className='bg-gray-50 absolute bottom-0 px-2 py-2 text-[#cdb38d] font-bold  text-lg rounded-se-sm'>New Menu : <br /><span className='text-gray-800'>Chocolate Creme Cookies</span></h1>
          </div>
          <p className='bg-gray-50 text-xs md:text-sm p-2 text-justify font-bold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='rounded-md overflow-hidden shadow-xl max-w-[300px]'>
          <div className='relative max-h-[400px] h-full '>
            <img src={News4} alt="" className='max-h-[400px] h-full w-full' />
            <h1 className='bg-gray-50 absolute bottom-0 px-2 py-2 text-[#cdb38d] font-bold  text-lg rounded-se-sm'>New Menu : <br /><span className='text-gray-800'>Chocolate Creme Cookies</span></h1>
          </div>
          <p className='bg-gray-50 text-xs md:text-sm p-2 text-justify font-bold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
