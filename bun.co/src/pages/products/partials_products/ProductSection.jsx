import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { ProductData } from '../data/FetchProductData'
import ProductCard from './ProductCard'

const ProductSection = () => {
  const [indexProduct, setIndexProduct] = useState(0);
  const [categoryProduct, setCategoryProduct] = useState([...ProductData]);
  const FilterProduct = (category, index) => {
    setIndexProduct(index)
    if(category === 'All'){
      setCategoryProduct([...ProductData]);
    }
    else{
      const filteredProducts = ProductData.filter(product => product.Category === category);
    setCategoryProduct([...filteredProducts]);
    }
  }

  
  const ProductButton = ['All','Cake', 'Doughnut', 'Ice Cream', 'Pie', 'Pudding']
  return (
    <div className='w-full flex justify-center font-poppins'>
      <div className='w-full max-w-[1300px] px-4 py-8 md:section flex flex-col items-center '>
        <h1 className='md:px-8 py-2 text-base sm:text-xl md:text-4xl font-bold rounded-md '>
          FRESHLY 
          <span className='text-[#BCA37F]'> BAKED ───────── <br />───────── BREAD </span> 
          EVERYDAY
        </h1>
    
        <motion.div className='flex flex-wrap gap-6  self-center py-6 text-[#9f8155]'> 
          {
            ProductButton .map((button, index)=> (
              <button className='relative px-4 py-1 flex items-center justify-center font-bold border border-[#BCA37F] rounded-full' 
              onClick={()=> FilterProduct(ProductButton[index],index)}>
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

        <div className='flex justify-center md:px-2 w-full'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {categoryProduct.map((data,index) => (
              <ProductCard data={data}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
