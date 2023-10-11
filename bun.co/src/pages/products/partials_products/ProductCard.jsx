import React from 'react'
import Test1 from '../products/Cake1.jpg'
const ProductCard = ({data}) => {
  return (
    <div className='flex flex-col max-w-[280px] font-poppins rounded-md shadow-xl overflow-hidden border-2'>
      <div className='relative w-full h-full'>
        <img src={data.Image} alt="" className=' max-w-[300px] max-h-[240px] md:max-h-[280px] w-full h-full'/>
        <h1 className='absolute bottom-1 left-1 py-1 px-2  bg-white/30 backdrop-blur-xl font-bold rounded-md'>{data.Category}</h1>
      </div>
      <div className='flex flex-col justify-between gap-2 p-2 text-gray-800 max-h-[100px] h-full'>
        <h1 className='text-sm md:text-base font-bold '>{data.Name}</h1>
        <p className='text-lg'>19$</p>
      </div>
    </div>
  )
}

export default ProductCard
