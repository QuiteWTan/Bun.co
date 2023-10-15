import React, { useRef, useState } from 'react'
import LoginBG from '../products/productsAssets/ProductDetail.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from '../../../firebase.config'
import { setDoc, doc } from 'firebase/firestore';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import { toast } from 'react-toastify';
const RegisterPage = () => {
  const nav = useNavigate()
  const [formValues, setFormValues] = useState({
    Username: '',
    Email: '',
    Password: '',
    Image:'',
  });
  const [loading,setLoading] = useState(false)

  const SignUp = async(e) => {
    e.preventDefault();
    setLoading(true)
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, formValues.Email, formValues.Password)
      const user = await userCredential.user
      const  storageRef =  ref(storage, `images/${Date.now() + formValues.Username}`)
      const uploadTask = uploadBytesResumable(storageRef, formValues.Image)

      uploadTask.on((error) => {
        toast.error(error.message)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateProfile(user, {
            displayName: formValues.Username,
            photoURL: downloadURL,
          });
          await setDoc(doc(db,"users",user.uid), {
            uid:user.uid,
            displayName:formValues.Username,
            email:formValues.Email,
            photoURL:downloadURL,
          })
        })
      })
      toast.success("Account created")
      nav('/login')
    }catch(error){
      toast.error(error.message)
    }
  }

  const fileInputRef = useRef()

  const handleFileUploadClick = (e) => {
    fileInputRef.current.click();
    e.preventDefault()
  };
  const handleChange = (name,value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
      }));

  }

  return (
    <div className='w-full flex justify-center items-center h-screen font-poppins bg-gray-50 relative'>
      <img src={LoginBG} alt=""  className='absolute w-full h-screen z-1 brightness-75'/>
      <div className='px-4 py-8 border-2 border-gray-600 max-w-[350px] w-full rounded-md flex flex-col h-fit shadow-md z-10 bg-white'>
          <h1 className='w-full  text-xl md:text-2xl lg:text-4xl font-bold text-center'>Register</h1>
          <h2 className='text-center py-2'>Register new account</h2>

          <form action="" className='w-full flex flex-col gap-2' onSubmit={SignUp}>
            <div className='flex items-center px-4 border-b border-gray-700 py-2 mx-2'>
                <input 
                type="text" 
                className='focus:outline-none w-full  mt-4' 
                placeholder='Username' 
                name='Username' 
                value={formValues.Username}
                onChange={(e) => handleChange(e.target.name,e.target.value)}
                />
              <box-icon name='user'></box-icon>
            </div>
            <div className='flex items-center px-4 border-b border-gray-700 py-2 mx-2'>
              <input 
              type="email" 
              className='focus:outline-none w-full  mt-4' 
              placeholder='Email' 
              name='Email' 
              value={formValues.Email}
              onChange={(e) => handleChange(e.target.name,e.target.value)}
              />
              <box-icon name='user'></box-icon>
            </div>
            <div className='flex items-center px-4 border-b border-gray-700 py-2 mx-2 mt-4'>
              <input 
              type="password" 
              className='focus:outline-none w-full' 
              placeholder='Password' 
              name='Password' 
              value={formValues.Password}
              onChange={(e) => handleChange(e.target.name,e.target.value)}
              />
              <box-icon name='lock-alt' ></box-icon>
            </div>
            <input type="file" name="Image" className='bg-gray-600 text-white hidden ' ref={fileInputRef} 
              onChange={(e) => handleChange(e.target.name, e.target.files[0])}/>

            <button className='flex items-center px-4 py-2 mx-2 mt-4 border border-gray-500' onClick={handleFileUploadClick}>
              <box-icon name='upload' ></box-icon>
              <h1 className='pl-2'>
                { formValues.Image ? 
                 'File inserted!': "Choose File" 
                }</h1>
            </button>
            

            <button type="submit" className='px-8 rounded-full bg-gray-700 text-white hover:scale-105 mt-2 py-2 duration-300 transition-all w-fit self-center'>SIGN UP </button>
            <p className='text-sm text-gray-600  w-fit self-center text-center mt-2'>Already have an account? <span className='border-gray-600 border-b'>Sign in </span></p>
          </form>
          
      </div>
    </div>
  )
}

export default RegisterPage
