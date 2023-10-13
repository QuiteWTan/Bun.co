import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { ProductData } from '../data/FetchProductData'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const ProductSection = () => {
  const [categoryProduct, setCategoryProduct] = useState([...ProductData]);
  const [tempCategoryProduct,setTempCategoryProduct] =useState([...categoryProduct])

  const FilterProduct = (e) => {
    if(e.target.value === 'All'){
      setCategoryProduct([...ProductData]);
    }
    else{
      const filteredProducts = ProductData.filter(product => product.Category === e.target.value);
    setCategoryProduct([...filteredProducts]);
    }
  }

  const SortProduct = (e) => {
    if(e.target.value === 'Default'){
        setCategoryProduct([...ProductData])
    }else if(e.target.value === 'Descending'){
        let updatedcategoryProduct = [...categoryProduct];
        const sortDescendcategoryProduct = updatedcategoryProduct.sort((a,b) => (a.Price < b.Price ? 1 : -1))
        updatedcategoryProduct = sortDescendcategoryProduct
        setCategoryProduct(updatedcategoryProduct)
    }else if(e.target.value === 'Ascending'){
      let updatedcategoryProduct = [...categoryProduct];
      const sortAscendcategoryProduct = updatedcategoryProduct.sort((a,b) => (a.Price > b.Price ? 1 : -1))
      updatedcategoryProduct = sortAscendcategoryProduct
      setCategoryProduct(updatedcategoryProduct)
    }
  }
  let LengthCurrent=0;
  let SearchProduct='';

  const FindProduct = (e) =>{
    setTempCategoryProduct([...categoryProduct])
    SearchProduct = ProductData.filter(product => product.Name.toLowerCase().includes(e.target.value.toLowerCase()))
    LengthCurrent = e.target.value.length;
    setCategoryProduct(SearchProduct)
  }

  const ProductButton = ['All','Cake', 'Doughnut', 'Ice Cream', 'Pie', 'Pudding']
  const SortButton = ['Default','Ascending','Descending']
  return (
    <div className='w-full flex justify-center font-poppins'>
      <div className='w-full max-w-[1300px] px-4 py-8 md:section flex flex-col items-center '>
        <h1 className='md:px-8 py-2 text-base sm:text-xl md:text-4xl font-bold rounded-md '>
          FRESHLY 
          <span className='text-[#BCA37F]'> BAKED ───────── <br />───────── BREAD </span> 
          EVERYDAY
        </h1>
    
        <div className='self-start md:px-4 my-4 flex flex-col md:flex-row items-start gap-8 w-full justify-between'>
          <div className='self-start flex flex-col min-[370px]:flex-row items-start gap-8 '>
            <div className='flex flex-col'>
              <h1 className=' px-4 mb-2'>Category By :</h1>
              <div className=' bg-[#9f8155] px-4 rounded-full shadow-md'>
                <select className=' gap-6 rounded-md px-2 py-2 bg-[#9f8155] text-white focus:outline-none font-bold ' 
                  onChange={(e)=> FilterProduct(e)}> 
                  {
                    ProductButton.map((button, index)=> (
                      <option className='relative px-4 py-1 flex items-center justify-center font-bold border border-[#BCA37F] rounded-full' 
                      value={ProductButton[index]}>

                        <h1 >{button}</h1>
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className='flex flex-col'>
              <h1 className=' px-4 mb-2'>Sort By :</h1>
              <div className=' bg-[#9f8155] px-4 rounded-full shadow-md'>
                <select className=' gap-6 rounded-md px-2 py-2 bg-[#9f8155] text-white focus:outline-none font-bold' 
                  onChange={(e)=> SortProduct(e)}> 
                  {
                    SortButton.map((button, index)=> (
                      <option className='relative px-4 py-1 flex items-center justify-center font-bold border border-[#BCA37F] rounded-full' 
                      value={SortButton[index]}>

                        <h1 >{button}</h1>
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-2/3 md:w-1/3'>
            <h1 className=' px-4 mb-2'>Search Product:</h1>
            <div className=' border-[#9f8155] border-2 py-2 px-4 rounded-full flex items-center shadow-md'>
              <input type="text" className='focus:outline-none w-full' placeholder='Search here' onChange={() => FindProduct(e)}/>
              <box-icon name='search' color="#9f8155"></box-icon>
            </div>
          </div>
        </div>

        <hr  className='w-full border border-[#BCA37F] mb-4'/>

        <div className='flex justify-center md:px-2 w-full'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            {
              categoryProduct.length !== 0 ? 
                categoryProduct.map((data,index) => (
                  <Link to={`${data.id}`}>
                    <ProductCard data={data} key={index}/>
                  </Link>
                ))

              : <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-4'> Product not found</h1>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
