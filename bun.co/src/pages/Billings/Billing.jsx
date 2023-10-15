import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Billing = () => {
    const dispatch = useDispatch()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const [formValues, setFormValues] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Address: '',
        City:'',
        Postal:'',
        Country:'',
      });
    
      const handleChange = (name,value) => {
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [name]: value,
          }));
      }
    return (
        <div className='w-full flex justify-center py-24 px-2 md:px-12 font-poppins'>
            <div className='max-w-[1300px] w-full flex flex-wrap gap-4 justify-center'>
            <form action="" className='flex flex-col w-full max-w-[650px] gap-4 px-4' >
                    <h1 className='text-xl md:text-2xl w-full font-bold text-gray-800 my-2'>Billing Information</h1>
                    <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='ID Name' 
                      name='Name' 
                      value={formValues.Name}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                    <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Email' 
                      name='Email' 
                      value={formValues.Email}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                      <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Phone Number' 
                      name='Phone' 
                      value={formValues.Phone}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                      <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Home Address' 
                      name='Address' 
                      value={formValues.Address}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                      <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='City' 
                      name='City' 
                      value={formValues.City}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                      <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Postal Code' 
                      name='Postal' 
                      value={formValues.Postal}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />
                      <input 
                      type="text" 
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                      placeholder='Country' 
                      name='Country' 
                      value={formValues.Country}
                      onChange={(e) => handleChange(e.target.name,e.target.value)}
                      />

                  </form>
                <div className='p-4  max-w-[350px] w-full rounded-sm flex flex-col h-fit shadow-md border-2'>
                    <h1 className='w-full  text-xl md:text-3xl font-bold'>Summary</h1>
                    <div className='pt-4 w-full flex justify-between text-sm md:text-base'>
                        <h1 >Total Items</h1>
                        <h1>{totalQuantity} items</h1>
                    </div>
                    <div className='pt-4 w-full flex justify-between text-sm md:text-base'>
                        <h1 >Subtotal</h1>
                        <h1>$ {totalAmount}</h1>
                    </div>
                    <div className='pt-4 w-full flex justify-between text-sm md:text-base'>
                        <h1 >Estimated Shipping</h1>
                        <h1>$ {totalAmount * 2/100}</h1>
                    </div>
                    <div className='pt-4 w-full flex justify-between text-sm md:text-base'>
                        <h1>Tax and services</h1>
                        <h1>$ {totalAmount * 5/100}</h1>
                    </div>
                    <div className='mt-4 py-2 border-gray-400 border-y-2 w-full flex justify-between text-sm md:text-base'>
                        <h1 className='font-bold'>Total Amount</h1>
                        <h1>$ {totalAmount + totalAmount * 2/100 + totalAmount * 5/100}</h1>
                    </div>
                    <button className='w-full rounded-full bg-gray-700 text-white hover:scale-105 mt-2 py-2 duration-300 transition-all'>Checkout</button>
                </div>
            </div>
        </div>
  )
}

export default Billing
