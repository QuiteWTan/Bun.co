import React from 'react'
import ThirdAbout from '../assets/ThirdAbout.png'

const ThirdSection = () => {
  return (
    <div className='w-full max-w-[1300px] self-center flex flex-col-reverse md:flex-row font-poppins md:container justify-center gap-6 px-4 py-6'>
        <div className='flex flex-col max-w-[600px] w-full justify-center gap-2'>
            <h2 className='flex flex-row w-full items-center justify-end md:text-lg gap-2 font-cinzel text-right'><hr className='h-[2px] bg-gray-600 w-1/3'/> Start from bottom </h2>
            <h1 className='text-5xl text-right'>Dream, Create, Live</h1>
            <p className='text-sm md:text-base py-4 text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className='flex justify-center'>
            <img src={ThirdAbout} alt=""  className='max-h-[400px]'/>
        </div>

    </div>
  )
}

export default ThirdSection
