import React, { useState } from 'react'
import Test1 from '../products/Cake1.jpg'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';
const ProductCard = ({data}) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id:data.id,
      Name : data.Name,
      Price: data.Price,
      Image : data.Image,
    }))
    toast.success('Item added to cart')
  }

  const [color,setColor] =useState(false)
  return (
    <div className='flex flex-col max-w-[280px] font-poppins rounded-md shadow-xl overflow-hidden border-2 h-full'>
      <div className='relative w-full h-full'>
        <img src={data.Image} alt="" className=' max-w-[300px] max-h-[240px] md:max-h-[280px] w-full h-full'/>
        <h1 className='absolute bottom-1 left-1 py-1 px-2  bg-white/30 backdrop-blur-xl font-bold rounded-md'>{data.Category}</h1>
        <div className='absolute right-2 top-2 duration-300 transition-all p-1 flex items-center justify-center bg-[#BCA37F] rounded-full' onClick={() => setColor(!color)}>
          <box-icon name='heart' type='solid' color={`${color? 'red' : 'white'}`} ></box-icon>
        </div>
      </div>
      <div className='flex flex-col justify-between gap-2 p-2 text-gray-800 max-h-[100px] h-full relative'>
        <h1 className='text-xs md:text-sm lg:text-base font-bold '>{data.Name}</h1>
        <p className='text-lg'>{data.Price}</p>
        <div className='absolute p-1 bg-gray-700 flex items-center justify-center rounded-full bottom-2 right-2 shadow-md hover:scale-110 transition-all duration-300' onClick={addToCart}>
          <box-icon name='plus' color='white'></box-icon>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
