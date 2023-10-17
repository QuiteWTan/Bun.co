import React from 'react'
import useGetData from '../custom-hooks/useGetData'

const Orders = () => {
    const {data:orders} = useGetData('orders')

    return (
        <div className='w-full flex flex-col items-center py-4 px-2 md:px-12 font-poppins'>
          <div className='max-w-[1300px] w-full flex  flex-col '>
            <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-2'>ORDER REPORT</h1>
            <div className='flex flex-wrap w-full gap-2 justify-center'>
            {
                orders.map((order,index) => (
                    <div className='p-4  max-w-[350px] w-full rounded-sm flex flex-col self-end font-poppins text-xs md:text-sm shadow-md border-2'>
                        <h1 className='w-full  text-xl md:text-3xl font-bold'>ORDERS</h1>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Name :</h1>
                            <h1>{order.Name}</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Email :</h1>
                            <h1>{order.Email}</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Country :</h1>
                            <h1>{order.Country}</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >City :</h1>
                            <h1>{order.City}</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Phone : </h1>
                            <h1>{order.Phone}</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Postal : </h1>
                            <h1>{order.Postal}</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Total Items : </h1>
                            <h1>{order.totalQuantity} items</h1>
                        </div>
                        <div className='pt-4 w-full flex justify-between'>
                            <h1 >Total Payment: </h1>
                            <h1>$ {order.totalAmount}</h1>
                        </div>
                    </div>
                ))
            }
            </div>
          </div>
        </div>
    )
}

export default Orders
