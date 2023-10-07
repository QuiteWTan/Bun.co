import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { ProductData } from '../data/FetchProductData'
import ProductCard from './ProductCard'

const ProductSection = () => {
  const [indexProduct, setIndexProduct] = useState(0);
  const [all, setAll] = useState()
  const handleClick = (index) => {
    setIndexProduct(index)
    if(index==0){
      for(let i=0 ;i<5;i++){
        setAll([...all,...ProductCard[i].Cake])
      }
    }
  }
  const ProductButton = ['All','Cake', 'Doughnut', 'Ice Cream', 'Pie', 'Pudding']
  return (
    <div className='w-full flex justify-center font-poppins'>
      <div className='w-full max-w-[1300px] section flex flex-col items-center '>
        <h1 className='px-8 py-2 text-xl md:text-4xl font-bold rounded-md '>
          FRESHLY 
          <span className='text-[#BCA37F] '> BAKED ───────── <br />───────── BREAD </span> 
          EVERYDAY
        </h1>
    
        <motion.div className='flex flex-row gap-6  self-center py-6 text-[#9f8155]'> 
          {
            ProductButton .map((button, index)=> (
              <button className='relative px-4 py-1 flex items-center justify-center font-bold border border-[#BCA37F] rounded-full' 
              onClick={()=> handleClick(index)}>
                {
                  index == indexProduct ? 
                    <motion.div transition={{type: "spring", duration:0.6}} className="absolute w-full h-full p-4 bg-[#BCA37F] rounded-full z-1" layoutId="bubble" /> 
                      : null
                }
                <h1 className={`text-lg z-2 relative duration-300 transition-all ${index == indexProduct ? 'text-white' : '' }`}>{button}</h1>
              </button>
            ))
          }
        </motion.div>
        <hr  className='w-full border border-[#BCA37F] mb-4'/>

        <div className='flex justify-center px-4 w-full'>
          <div className='flex flex-row flex-wrap'>
            {
              ProductData.map((data, index) => (
                <div key={index} className='w-1/4 p-2'>
                  {data.Cake.map((cakeData, cakeIndex) => (
                    <ProductCard key={cakeIndex} data={cakeData} />
                  ))}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
