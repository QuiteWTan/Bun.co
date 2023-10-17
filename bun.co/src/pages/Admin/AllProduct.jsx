import React, { useState } from 'react'
import useGetData from '../custom-hooks/useGetData'
import { db } from '../../../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import AddProduct from './AddProduct'
const AllProduct = () => {
  const {data} = useGetData('products')
  const Button = ['View product', 'Add Product']
  const [indexProduct, setIndexProduct] = useState(0)
  return (
    <div className='w-full flex flex-col items-center py-4 px-2 md:px-12 font-poppins '>
      <motion.div className='bg-gray-300 px-1 py-2 flex  gap-2 self-center rounded-full '> 
          {
            Button.map((button, index)=> (
              <button className='relative px-4 py-1 flex items-center justify-center font-bold border-2  rounded-full' onClick={() => setIndexProduct(!indexProduct)}
              >
                {
                  index == indexProduct ? 
                    <motion.div transition={{type: "spring", duration:0.6}} className="absolute w-full h-full p-4 bg-gray-700 rounded-full z-1" layoutId="bubble" /> 
                      : null
                }
                <h1 className={`text-sm  z-2 relative duration-300 transition-all ${index == indexProduct ? 'text-white' : '' }`}>{button}</h1>
              </button>
            ))
          }
        </motion.div>
      {
        indexProduct == 0 ? 
          data.length === 0 ? 
          <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-4'>Your Product Is Empty !</h1>
          :
          <div className='max-w-[1300px] w-full flex  flex-col  gap-4'>
            <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-4'>All Products </h1>
            <table className=' w-full'>
                <thead className='border-b-2  border-gray-600 '>
                    <tr>
                        <th className='py-2 pl-2'>Image</th>
                        <th className='py-2 pl-2'>Name</th>
                        <th className='py-2 pl-2'>Category</th>
                        <th className='py-2 pl-2'>Price</th>
                        <th className='py-2 pl-2'>Delete</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        data.map((item, index) => (
                            <Tr item={item} key={index}/>
                        ))
                    }
                </tbody>
            </table>
        </div> 
        :
        <AddProduct/>
      }
    </div>
  )
}

const Tr = ({item}) => {


  const deleteItem = async(id) => {
      await deleteDoc(doc(db,'products', id))
      toast.success("Product Deleted")
  }
  return(
      <tr className='text-center'>
          <td className='pl-2 py-2 flex justify-center'><img src={item.imgUrl} alt="" className='w-20 h-20 '/></td>
          <td className='py-2 pl-2'>{item.title}</td>
          <td className='py-2 pl-2'>{item.category}</td>
          <td className='py-2 pl-2'>{item.price}</td>
          <td className='py-2 pl-2'><button><box-icon type='solid' name='trash-alt' color='red' onClick={() => deleteItem(item.id)}></box-icon></button></td>
      </tr>
  )
}
export default AllProduct
