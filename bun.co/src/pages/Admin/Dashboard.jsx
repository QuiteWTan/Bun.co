import React from 'react'
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {
  const {data:products} = useGetData('products')
  const {data:users} = useGetData('users')
  return (
    <div className='w-full flex justify-center py-4 px-2 md:px-12 font-poppins '>
      <div className='max-w-[1100px] w-full grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-gray-600 text-white px-8 py-2 rounded-md'>
            <h1 className='text-base md:text-lg'>Total Sales</h1>
            <hr className='h-[1px] bg-white'/>
            <p className='text-4xl mt-6 font-bold'>$1272</p>
        </div>
        <div className='bg-gray-600 text-white px-8 py-2 rounded-md'>
            <h1 className='text-base md:text-lg'>Total Product</h1>
            <hr className='h-[1px] bg-white'/>
            <p className='text-4xl mt-6 font-bold'>{25 + products.length}</p>
        </div>
        <div className='bg-gray-600 text-white px-8 py-2 rounded-md'>
            <h1 className='text-base md:text-lg'>Total Users</h1>
            <hr className='h-[1px] bg-white'/>
            <p className='text-4xl mt-6 font-bold'>{users.length}</p>
        </div>
        <div className='bg-gray-600 text-white px-8 py-2 rounded-md'>
            <h1 className='text-base md:text-lg'>Orders</h1>
            <hr className='h-[1px] bg-white'/>
            <p className='text-4xl mt-6 font-bold'>$1272</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
