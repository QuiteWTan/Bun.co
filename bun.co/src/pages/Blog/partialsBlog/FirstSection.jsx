import React from 'react'
import Blog from '../news_assets/Blog.jpg'

const FirstSection = () => {
  return (
    <div className='w-full self-center relative h-screen '>
      <img src={Blog} alt="" className='w-full brightness-50 h-full'/>
      <div className='md:p-14 absolute bottom-4 w-full  text-white max-w-[1300px] font-poppins px-4'>
        <h3 className=' text-2xl font-libre'>Featured</h3>
        <h1 className='text-2xl md:text-5xl font-bold'>
            5th National <span className='text-[#cdb38d]'>Bakery Award</span> 2023: 
            <br />
            Behind the scene where it started all
        </h1>
        <p className='text-sm md:text-base py-4 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-2xl font-bold md:text-5xl hover:translate-x-5 duration-300 transition-all p-2 border-white border-2 w-fit rounded-md'>{'>>'}</p>
      </div>
    </div>
  )
}

export default FirstSection
