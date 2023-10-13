import React, { useState } from 'react'
import Banner1 from '../productsAssets/Banner1.jpg'
import Banner2 from '../productsAssets/Banner2.jpg'
import Banner3 from '../productsAssets/Banner3.jpg'

const Banner = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent(current === 0 ? 2 : (prev) => prev-1)
  }
  const nextSlide = () => {
    setCurrent(current === 2 ? 0: (next) => next+1)
  }
  return (
    <div className='w-full flex justify-center font-poppins overflow-x-hidden'>
        <div className='py-18 w-full flex justify-start'>
            <div style={{transform:`translateX(-${current * 100}vw)`}} className='w-[300vw] transition-all duration-1000 flex'>
              <div className='w-[100vw] h-screen md:h-[700px] flex justify-center relative'>
                <div className='w-[100vw] sm:w-[90vw] md:h-[700px] relative flex justify-center items-center'>
                  <img src={Banner1} alt="" className='w-[100vw] sm:w-[90vw] h-full'/>
                  <div className='absolute p-4 backdrop-blur-md bg-white/30 top-[30%] left-0 md:left-8 text-4xl rounded-md flex flex-col gap-3'>
                    <h1 className='bg-yellow-700 px-2 text-white rounded-md w-fit'>HAPPY NATIONAL BREAD DAY!</h1>
                    <h2 className='font-bold'>ALL BREAD IS OFF BY 15%</h2>
                    <h3 className='text-2xl font-linden'> DONT MISS OUT!</h3>
                  </div>
                  <button onClick={nextSlide} className='absolute bottom-1 right-1 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[-5px] duration-300 transition-all rounded-md'>
                      <box-icon name='chevrons-right' type='solid' color='gray' size="md"></box-icon>
                  </button>
                  <button onClick={prevSlide} className='absolute bottom-1 left-1 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[5px] duration-300 transition-all rounded-md'>
                      <box-icon name='chevrons-left' type='solid' color='gray' size="md"></box-icon>
                  </button>
                </div>
              </div>
              <div className='w-[100vw] h-screen md:h-[700px] flex justify-center'>
                <div className='w-[100vw] sm:w-[90vw] md:h-[700px] relative flex justify-center items-center'>
                  <img src={Banner2} alt="" className='w-[100vw] sm:w-[90vw] h-full'/>
                  <div className='absolute p-4 backdrop-blur-md bg-white/30 top-[30%] left-0 md:left-8 text-4xl rounded-md flex flex-col gap-3'>
                    <h1 className='bg-gray-700 px-2 text-white rounded-md w-fit'>Get 25% OFF</h1>
                    <h2 className='font-bold'>ON YOUR <br /> FIRST PURCHASE</h2>
                    <h3 className='text-2xl font-linden'> DONT MISS OUT!</h3>
                  </div>
                  <button onClick={nextSlide} className='absolute bottom-1 right-1 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[-5px] duration-300 transition-all rounded-md'>
                      <box-icon name='chevrons-right' type='solid' color='gray' size="md"></box-icon>
                  </button>
                  <button onClick={prevSlide} className='absolute bottom-1 left-1 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[5px] duration-300 transition-all rounded-md'>
                      <box-icon name='chevrons-left' type='solid' color='gray' size="md"></box-icon>
                  </button>
                </div>
              </div>
              <div className='w-[100vw] h-screen md:h-[700px] flex justify-center'>
                <div className='w-[100vw] sm:w-[90vw] md:h-[700px] relative flex justify-center items-center'>
                  <img src={Banner3} alt="" className='w-[100vw] sm:w-[90vw] h-full'/>
                  <div className='absolute p-4 backdrop-blur-md bg-white/30 top-[30%] left-0 md:left-8 text-4xl rounded-md flex flex-col gap-3'>
                  <h1 className='px-2 bg-orange-800 text-white rounded-md w-fit'>NEW BREAD MENU <br />COMING SOON </h1>
                    <h2 className='font-bold'>STAY TUNE!</h2>
                  </div>
                  <button onClick={nextSlide} className='absolute bottom-1 right-1 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[-5px] duration-300 transition-all rounded-md'>
                      <box-icon name='chevrons-right' type='solid' color='gray' size="md"></box-icon>
                  </button>
                  <button onClick={prevSlide} className='absolute bottom-1 left-1 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[5px] duration-300 transition-all rounded-md'>
                      <box-icon name='chevrons-left' type='solid' color='gray' size="md"></box-icon>
                  </button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
