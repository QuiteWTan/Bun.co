import React, { useState } from 'react'
import LoginBG from '../products/productsAssets/ProductDetail.jpg'
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from'firebase/auth'
import {auth} from '../../../firebase.config'
import {  toast } from 'react-toastify';
const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    Email: '',
    Password: '',
  });
  const handleChange = (name,value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
      }));
  }
  const nav = useNavigate()
  const [loading,setLoading] = useState(false)
  const SignIn = async(e) => {
    e.preventDefault()
    setLoading(true)
    try{
      const userAuth = await signInWithEmailAndPassword(auth, formValues.Email, formValues.Password)

      const user = userAuth.user
      setLoading(false)
      toast.success("Login Successful")
      nav('/home')
    }catch(error){
      toast.error(error.message)
    }
  }
  return (
    <div className='w-full flex justify-center items-center h-screen font-poppins bg-gray-50 relative'>
      <img src={LoginBG} alt=""  className='absolute w-full h-screen z-1 brightness-75'/>
      <div className='px-4 py-8 border-2 border-gray-600 max-w-[350px] w-full rounded-md flex flex-col h-fit shadow-md z-10 bg-gray-50'>
          <h1 className='w-full  text-xl md:text-2xl lg:text-4xl font-bold text-center'>LOGIN</h1>
          <h2 className='text-center py-2'>Fill your information to login</h2>
          <form action="" className='w-full flex flex-col gap-2' onSubmit={SignIn}>
            <div className='flex items-center px-4 border-b border-gray-700 py-2 mx-2'>
              <input 
              type="text" 
              className='focus:outline-none w-full bg-gray-50 mt-4' 
              placeholder='Email' 
              name='Email' 
              value={formValues.Name}
              onChange={(e) => handleChange(e.target.name,e.target.value)}
              />
              <box-icon name='user'></box-icon>
            </div>
            <div className='flex items-center px-4 border-b border-gray-700 py-2 mx-2 mt-4'>
              <input 
              type="password" 
              className='focus:outline-none w-full bg-gray-50' 
              placeholder='Password' 
              name='Password' 
              value={formValues.Name}
              onChange={(e) => handleChange(e.target.name,e.target.value)}
              />
              <box-icon name='lock-alt' ></box-icon>
            </div>
            <input type="text" />
            <button type='submit' className='px-8 rounded-full bg-gray-700 text-white hover:scale-105 mt-2 py-2 duration-300 transition-all w-fit self-center'>Login</button>
            <p className='text-sm text-gray-600 border-gray-600 border-b w-fit self-center text-center mt-2'><Link to="/register">Create an account</Link></p>
          </form>
          
      </div>
    </div>
  )
}

export default LoginPage
