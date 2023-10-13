import React from 'react'
import ChooseUs1 from '../homeImage/ChooseUs1.jpg'
import ChooseUs2 from '../homeImage/ChooseUs2.jpg'
import ChooseUs3 from '../homeImage/ChooseUs3.jpg'
const ThirdSection = () => {
  return (
    <div className=' bg-gray-200 text-gray-800 w-full gap-12 px-4 py-6 md:py-0 font-poppins flex justify-center  overflow-x-hidden'>
        <div className='max-w-[1200px] w-full flex flex-col justify-center items-center gap-4 md:container'>
            <h1 className='text-2xl md:text-5xl font-bold font-cinzel'>CHOOSE US </h1>
            <div className='py-4 flex flex-wrap gap-4 text-justify items-center justify-center'>
                <div className='text-center flex flex-col max-w-[350px] border-2 border-gray-300 shadow-md px-2 py-4 bg-gray-50 rounded-t-full'>
                    <img src={ChooseUs1} alt="" className='rounded-t-full max-h-[300px]'/>
                    <h1 className='text-xl font-bold  py-2'>High Quality</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                <div className='text-center flex flex-col max-w-[350px] border-2 border-gray-300 shadow-md px-2 py-4 bg-gray-50 rounded-t-full'>
                    <img src={ChooseUs2} alt="" className='rounded-t-full max-h-[300px]'/>
                    <h1 className='text-xl font-bold  py-2'>Customizeable Product</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
                <div className='text-center flex flex-col max-w-[350px] border-2 border-gray-300 shadow-md px-2 py-4 bg-gray-50 rounded-t-full'>
                    <img src={ChooseUs3} alt="" className='rounded-t-full max-h-[300px]'/>
                    <h1 className='text-xl font-bold  py-2'>Expert Decoration</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
            </div>
            <button className='rounded-sm duration-300 transition-all border-2 border-gray-800 bg-gray-800 text-white hover:bg-transparent hover:text-gray-800 hover:font-bold px-6 py-2 text-lg mt-6'>DISCOVER PRODUCT</button>
        </div>
      
    </div>
  )
}

export default ThirdSection
