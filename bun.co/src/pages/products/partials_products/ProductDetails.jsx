import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductData } from '../data/FetchProductData'
import ProductDetailImage from '../productsAssets/ProductDetail.jpg'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify'
const ProductDetails = () => {
  const dispatch = useDispatch()

  const { id } = useParams();
  const Product = ProductData.find(product => product.id === id);
  const [IndexCatalog,setIndexCatalog] = useState(0);
  const { Image, Name, Price, Description, Category, ShortDescription, Review } = Product;
  const [DetailButton, setDetailButton] = useState(['Description', 'Reviews'])
  useEffect(()=>{

  },[Review])
  const [formValues, setFormValues] = useState({
    Subject: '',
    Content: '',
  });

  const handleChange = (name,value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
      }));
  }
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString();
  const handleSubmit = () => {
    if(!formValues.Subject || !formValues.Content){
      e.preventDefault();
    }
    else{
      const newReview = { Subject: formValues.Subject, Content: formValues.Content, Time: formattedDateTime};
      Review.push(newReview);
      e.preventDefault();
    }
  }


  const addToCart = () => {
    dispatch(cartActions.addItem({
       id,
       Name,
       Price,
      Image: Image,
    }))
    toast.success('Item added to cart')
    console.log('test')
  }
  useEffect(() => {
    window.scrollTo(0,0)
  },[Product])

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
            <h1 className='text-xl md:text-2xl lg:text-4xl w-full font-bold text-gray-500 mt-4'>{Price}</h1>
            <h1 className='max-w-[700px] my-4 text-sm md:text-base'>{ShortDescription}</h1>
            <button className='w-fit text-white bg-[#9f8155] px-6 py-2 rounded-md shadow-md hover:brightness-75 hover:scale-105 duration-300 transition-all' onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

        <div className='self-start mt-12 lg:px-12 w-full'>
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
            <div color='w-full '>
              {
                IndexCatalog === 0? 
                <h1 className=' my-4 text-sm md:text-base'>{Description}</h1>
                : 
                <div className='my-4 w-full'>
                  <div >
                    {
                      Review.length!==0? 
                        Review.map((review,index) => (
                          <div className='shadow-md border-2 p-4 my-2'>
                            <div className='flex items-center mb-2'>
                              <box-icon name='user'></box-icon>
                              <h1 className='font-bold pl-2'> Anonymous</h1>
                            </div>
                            <h1 className='text-sm mb-6'>{review.Time}</h1>
                            <h1 className='text-xl md:text-2xl font-bold mb-3'>{review.Subject}</h1>
                            <h1 className='text-base md:text-lg '>{review.Content}</h1>
                            
                          </div>
                        ))
                        : 
                        <h1 className='text-xl md:text-2xl lg:text-4xl w-full font-bold text-gray-800 px-4  my-4'>No Review Available</h1>
                    }
                  </div>
                  <hr className='w-full h-1 bg-gray-700'/>
                  <form action="" className='flex flex-col w-full max-w-[650px] gap-4 px-4' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='text-xl md:text-2xl w-full font-bold text-gray-800 my-4'>Give Us A Review</h1>
                    <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Subject' 
                      name='Subject' 
                      value={formValues.Subject}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                    <textarea name="Content" id="" cols="30" rows="10" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Content'
                      value={formValues.Content}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                    ></textarea>
                    <button type="submit" className='border text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white duration-300 transition-all w-fit px-8 py-2 rounded-sm font-bold'>Submit Review</button>
                  </form>
                </div>
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
                  <ProductCard data={data} />

              ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
