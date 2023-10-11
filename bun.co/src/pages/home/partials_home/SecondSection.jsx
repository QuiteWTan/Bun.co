import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ImagePaths from './ImageCatalogData'
const CatalogButton = ['Cake', 'Doughnut', 'Ice Cream', 'Pie', 'Pudding']
const CatalogHomeData = [
  {
    id:0,
    Cake:[
        {
          Name:'Strawberry Fruit Cake with Cream Cheese',
          Price:'$500',
          Image : ImagePaths[0][0]
        }, 
        {
          Name:'Lemon Glaze with Grapefruit Cake',
          Price:'$500',
          Image : ImagePaths[0][1]
        }, 
        {
          Name:'Strawberry & Cream Roll Cake',
          Price:'$500',
          Image : ImagePaths[0][2]
        }, 
        {
          Name:'Chocolate Roll Cake with Cream',
          Price:'$500',
          Image : ImagePaths[0][3]
        }, 
        {
          Name:'Three Layered Vanilla Fruit Cake',
          Price:'$500',
          Image : ImagePaths[0][4]
        }, 
    ],
  },
  {
    id:1,
    Cake:[
        {
          Name:'Vanilla Cream Fillings Doughnut',
          Price:'$500',
          Image : ImagePaths[1][0]
        }, 
        {
          Name:'Gingerbread Coffee doughnut',
          Price:'$500',
          Image : ImagePaths[1][1]
        }, 
        {
          Name:'Meat Floss Doughnut',
          Price:'$500',
          Image : ImagePaths[1][2]
        }, 
        {
          Name:'Vanilla Glazed Doughnut',
          Price:'$500',
          Image : ImagePaths[1][3]
        }, 
        {
          Name:'Lemon Glazed with Poppy seeds Doughnut',
          Price:'$500',
          Image : ImagePaths[1][4]
        }, 
    ],
  },
  {
    id:2,
    Cake:[
        {
          Name:'Banana & Caramel Glazed Ice Cream',
          Price:'$500',
          Image : ImagePaths[2][0]
        }, 
        {
          Name:'Strawberry Ice Cream',
          Price:'$500',
          Image : ImagePaths[2][1]
        }, 
        {
          Name:'Plain Vanilla Ice Cream',
          Price:'$500',
          Image : ImagePaths[2][2]
        }, 
        {
          Name:'Blueberry & Chocolate Icing Ice Cream Stick',
          Price:'$500',
          Image : ImagePaths[2][3]
        }, 
        {
          Name:'Oreo Vanilla Ice Cream Sandwich',
          Price:'$500',
          Image : ImagePaths[2][4]
        }, 
    ],
  },
  {
    id:3,
    Cake:[
        {
          Name:'Cherry Pie',
          Price:'$500',
          Image : ImagePaths[3][0]
        }, 
        {
          Name:'Banana & Cream Topping Pie',
          Price:'$500',
          Image : ImagePaths[3][1]
        }, 
        {
          Name:'Pumpkin Pie',
          Price:'$500',
          Image : ImagePaths[3][2]
        }, 
        {
          Name:'Blueberry Pie',
          Price:'$500',
          Image : ImagePaths[3][3]
        }, 
        {
          Name:'Apple pie with Apple Fruit',
          Price:'$500',
          Image : ImagePaths[3][4]
        }, 
    ],
  },
  {
    id:4,
    Cake:[
        {
          Name:'Creme Caramel Pudding',
          Price:'$500',
          Image : ImagePaths[4][0]
        }, 
        {
          Name:'Orange Jelly and Milk Pudding',
          Price:'$500',
          Image : ImagePaths[4][1]
        }, 
        {
          Name:'Chocolate & Vanilla Pudding with Shaved Chocolate',
          Price:'$500',
          Image : ImagePaths[4][2]
        }, 
        {
          Name:'Vanilla Pudding with Lemon Glaze',
          Price:'$500',
          Image : ImagePaths[4][3]
        }, 
        {
          Name:'Lemon & Vanilla Pudding',
          Price:'$500',
          Image : ImagePaths[4][4]
        }, 
    ],
  },
]
const SecondSection = () => {
  const [IndexCatalog,setIndexCatalog] = useState(0);
  return (
    <div className='w-full gap-12 px-4 md:section font-poppins flex justify-center py-4 overflow-x-hidden'>
        <div className='max-w-[1200px] w-full flex flex-col justify-center gap-8'>
            <h1 className='text-5xl self-center pb-4 border-b-2 border-gray-800'>POPULAR CATALOG</h1>
            <motion.div className='flex flex-wrap gap-4 self-center'> 
              {
                CatalogButton.map((button, index)=> (
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

              {
                CatalogHomeData.map((Data)=> (
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0.1, x: 100 },
                      visible: { opacity: 1, x: 0 },
                    }} className={`grid-cols-catalogHomeXS min-[550px]:grid-cols-catalogHomeSM md:grid-cols-catalogHome md:grid-rows-2 gap-4  md:max-h-[600px] px-4 self-center ${Data.id== IndexCatalog ? 'grid' : 'hidden'}`}>
                      {Data.Cake.map((data,index) => (
                        <div className={`relative w-full h-full shadow-md border-2  ${index === 4 ? 'min-[550px]:col-span-2 md:col-span-1 md:row-start-1 md:row-end-3 md:col-start-3' : ''}`}>
                            <img src={data.Image} alt="" className='w-full h-full rounded-md'/>
                            <div className='absolute bg-white/30 backdrop-blur-xl w-full py-2 bottom-0 px-2 text-sm lg:text-base'>
                              <h1 className='font-bold text-gray-800 '>{data.Name}</h1>
                              <p className='font-bold text-gray-500'>{data.Price}</p>
                            </div>
                        </div>

                    ))}
                  </motion.div>
                ))
              }
            
        </div>
    </div>
  )
}

export default SecondSection
