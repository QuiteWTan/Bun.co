import { motion } from 'framer-motion'
import React, { useState } from 'react'

const ProductSection = () => {
  const [indexProduct, setIndexProduct] = useState(0)
  const ProductButton = ['Cake', 'Doughnut', 'Ice Cream', 'Pie', 'Pudding']
  return (
    <div className='w-full flex justify-center font-poppins'>
      <div className='w-full max-w-[1300px] section flex flex-col items-center '>
        <h1 className='px-8 py-2 text-xl md:text-4xl font-bold rounded-md '>FRESHLY <span className='text-[#BCA37F] '> BAKED ───────── <br />───────── BREAD</span> EVERYDAY</h1>
        <p className='max-w-[700px] text-center py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
        <hr  className='w-full border border-[#BCA37F]'/>
        <motion.div className='flex flex-row gap-6  self-center py-6 text-[#9f8155]'> 
              {
                ProductButton .map((button, index)=> (
                  <button className='relative px-4 py-1 flex items-center justify-center font-bold border border-[#BCA37F] rounded-full' 
                  onClick={()=> setIndexProduct(index)}>
                    {index == indexProduct ? <motion.div transition={{type: "spring", duration:0.6}} className="absolute w-full h-full p-4 bg-[#BCA37F] rounded-full z-1" layoutId="bubble" /> : null}
                    <h1 className={`text-lg z-2 relative duration-300 transition-all ${index == indexProduct ? 'text-white' : '' }`}>{button}</h1>

                  </button>
                ))
              }
            </motion.div>
      </div>
    </div>
  )
}

export default ProductSection
