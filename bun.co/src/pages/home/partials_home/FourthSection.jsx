import React, { useState } from 'react'
import Package1 from '../home/Packaging1.jpg'
import Package2 from '../home/Packaging2.jpg'
import Package3 from '../home/Packaging3.jpg'
import Package4 from '../home/Packaging4.jpg'

const FourthSection = () => {
    const ImageList = [Package1,Package2,Package3,Package4]
    const [ImageIndex,setImageIndex] = useState(0)
  return (
    <div className='  text-gray-800 w-full gap-12 px-2 py-4 md:py-0 font-poppins flex justify-center h-fit'>
        <div className='max-w-[1200px] w-full flex justify-center gap-4 md:container'>
            <div className=' flex flex-col md:flex-row gap-6'>
                <div className='grid grid-cols-fs grid-rows-fs max-w-[500px] max-h-[500px] w-full h-full '>
                    <div className='w-full h-full col-span-5 row-span-4 md:col-span-4 md:row-span-5 relative shadow border-2 rounded-md overflow-hidden'>
                        <img src={ImageList[ImageIndex]} alt="" className='w-full h-full '/>
                        <div className='absolute bottom-0 right-0 p-3 md:p-4 bg-gray-50  flex items-center justify-center hover:translate-y-[-5px] hover:translate-x-[-5px] duration-300 transition-all rounded-ss-md'>
                            <box-icon name='chevrons-right' type='solid' color='gray' size="md"></box-icon>
                        </div>
                    </div>
                    <div className='md:row-start-2 col-start-1 md:col-start-5 flex flex-row md:flex-col gap-2 md:px-2 pb-4 pt-1'>
                        {
                            ImageList.map((img,index) => (
                                <img src={img} alt="" className={`${ImageIndex === index ? 'brightness-50' : ''} rounded-md w-full h-full hover:scale-105 duration-300 transition-all `} onClick={() => setImageIndex(index)}/>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col justify-center max-w-[550px] font-bold'>
                    <h1 className='text-2xl md:text-5xl '>CUSTOMIZEABLE <br /> PACKAGE <br /> TO YOUR LIKING</h1>
                    <p className='text-sm md:text-base py-2 max-w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthSection
