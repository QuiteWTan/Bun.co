import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductData } from '../data/FetchProductData'
import ProductDetailImage from '../productsAssets/ProductDetail.jpg'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
const ProductDetails = () => {
  const { id } = useParams();
  const Product = ProductData.find(product => product.id === id);
  const [IndexCatalog,setIndexCatalog] = useState(0);
  const { Image, Name, Price, Description, Category, ShortDescription } = Product;
  const [DetailButton, setDetailButton] = useState(['Description', 'Reviews'])
  return (
    <div className='w-full flex flex-col  items-center font-poppins'>
      <div className='w-full overflow-hidden h-[20vh] md:h-[25vh] relative'>
        <img src={ProductDetailImage} alt=""  className='w-full brightness-50'/>
        <h1 className='text-xl md:text-2xl lg:text-4xl w-full text-center absolute text-white bottom-[20%] left-[50%] translate-x-[-50%] font-bold'>Details</h1>
      </div>
      <div className='max-w-[1300px] w-full flex flex-col items-center px-4 py-4 lg:container  '>
        <div className='flex flex-col md:flex-row gap-8'>
          <img src={Image} alt="" className='max-w-[400px] max-h-[350px] h-full w-full rounded-md p-4 shadow-md border-2'/>
          <div className='flex flex-col'>
            <h1 className=' md:text-xl font-bold font-poppins text-gray-500'>{Category}</h1>
            <h1 className='text-xl md:text-2xl lg:text-4xl w-full font-bold text-[#9f8155]'>{Name}</h1>
            <h1 className='max-w-[600px] my-4 text-sm md:text-base'>{ShortDescription}</h1>
            <button className='w-fit text-white bg-[#9f8155] px-6 py-2 rounded-md shadow-md hover:brightness-75 hover:scale-105 duration-300 transition-all'>Add to Cart</button>
          </div>
        </div>

        <div className='self-start mt-12 lg:px-12'>
            <motion.div className='flex flex-wrap gap-4 '> 
              {
                DetailButton.map((button, index)=> (
                  <button className='relative px-4 py-1 flex items-center justify-center font-bold ' onClick={()=> setIndexCatalog(index)}>
                    {index == IndexCatalog ? 
                      <motion.div className="underline" layoutId="underline" /> 
                      : 
                      null
                    }
                    <h1 className={`text-lg z-2 relative duration-300 transition-all `}>{button}</h1>

                  </button>
                ))
              }
            </motion.div>
            <div>
              {
                IndexCatalog === 0? 
                <h1 className=' my-4 text-sm md:text-base'>{Description}</h1>
                : 
                <h1 className='my-4'>No Review Available </h1>
              }
            </div>
        </div>
        <div className='w-full flex flex-col self-start mt-12 px-2 md:px-12'>
        <h1 className='text-xl md:text-2xl lg:text-4xl w-full font-bold text-[#9f8155] my-4'>You might also like</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {
            ProductData
              .filter(data => data.id !== id) 
              .slice(0, 8)
              .map((data, index) => (
                <Link to={`${data.id}`} key={index}>
                  <ProductCard data={data} />
                </Link>
              ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
