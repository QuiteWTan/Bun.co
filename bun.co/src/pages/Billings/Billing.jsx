import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import {auth, storage, db} from '../../../firebase.config'
import { setDoc, doc } from 'firebase/firestore';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
const Billing = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => state.cart.cartItems)
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

      const ClearCart = async(e) =>{
          if(totalQuantity!=0){
            e.preventDefault()
            try{
              const docRef = await collection(db, 'orders')
              await addDoc(docRef, {
                Name: formValues.Name,
                Email:formValues.Email,
                Phone: formValues.Phone,
                Address:formValues.Address,
                City: formValues.City,
                Postal: formValues.Postal,
                Country:formValues.Country,
                item:cartItems,
                totalQuantity : totalQuantity, 
                totalAmount: totalAmount + totalAmount * 2/100 + totalAmount * 5/100
              })

             }catch(error){
               toast.error(error.message)
              } 
            // dispatch(cartActions.removeAllItem())
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Item Purchase is successfull',
            })
        }else{
            dispatch(cartActions.removeAllItem())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No Cart in your items go purchase some!',
            })
        }
        // nav('/home')
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
                      type="email" 
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
                      className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full ' 
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
                    <button className='w-full rounded-full bg-gray-700 text-white hover:scale-105 mt-2 py-2 duration-300 transition-all' onClick={ClearCart}>Checkout</button>
                </div>
            </div>
        </div>
  )
}

export default Billing
