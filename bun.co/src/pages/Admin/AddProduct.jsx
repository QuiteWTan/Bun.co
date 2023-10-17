import { addDoc, collection } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import {auth, storage, db} from '../../../firebase.config'
import { setDoc, doc } from 'firebase/firestore';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'


const AddProduct = () => {
  const fileInputRef = useRef()
  const dispatch = useDispatch()
  const nav = useNavigate()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const [formValues, setFormValues] = useState({
      Name: '',
      ShortDescription: '',
      Description: '',
      Price: '',
      Category: '',
      Image:'',
    });
  
    const handleChange = (name,value) => {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: value,
        }));
    }

    const ClearCart = () =>{
      if(totalQuantity!=0){
          dispatch(cartActions.removeAllItem())
          Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Item Purchase is successfull',
        })
        nav('/home')
      }else{
          dispatch(cartActions.removeAllItem())
          Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No Cart in your items go purchase some!',
          })
        nav('/home')
      }
    }

    const AddProduct = async(e) => {
      e.preventDefault()

      try{
        const docRef = await collection(db, 'products')
        const  storageRef =  ref(storage, `productImages/${Date.now() + formValues.Image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, formValues.Image)

        uploadTask.on((error) => {
          toast.error(error.message)
        }, ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await addDoc(docRef, {
              title: formValues.Name,
              shortdescription:formValues.ShortDescription,
              description: formValues.Description,
              price:formValues.Price,
              category: formValues.Category,
              imgUrl: downloadURL
            })
          })
        })
        toast.success("Product successfully added")
        nav('/admin/all-product')
      }catch(error){
        toast.error(error.message)
      }
    }

    const handleFileUploadClick = (e) => {
      fileInputRef.current.click();
      e.preventDefault()
    };
    const ProductButton = ['All','Cake', 'Doughnut', 'Ice Cream', 'Pie', 'Pudding']
  return (
      <div className='w-full flex justify-center py-4 px-2 md:px-12 font-poppins'>
          <div className='max-w-[1300px] w-full flex flex-wrap gap-4 justify-center'>
          <form action="" className='flex flex-col w-full max-w-[650px] gap-4 px-4' onSubmit={AddProduct}>
                  <h1 className='text-xl md:text-2xl w-full font-bold text-gray-800 my-2'>Insert Product Information</h1>
                  <input 
                    type="text" 
                    className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                    placeholder='Product Title' 
                    name='Name' 
                    value={formValues.Name}
                    onChange={(e) => handleChange(e.target.name,e.target.value)}
                    />
                    <textarea 
                    className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                    placeholder='Product Short Description' 
                    name='ShortDescription' 
                    value={formValues.ShortDescription}
                    onChange={(e) => handleChange(e.target.name,e.target.value)}  
                    cols="30" rows="2"></textarea>
                  <textarea 
                    className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                    placeholder='Product Description' 
                    name='Description' 
                    value={formValues.Description}
                    onChange={(e) => handleChange(e.target.name,e.target.value)}  
                    cols="30" rows="5">

                  </textarea>

                    <input 
                    type="text" 
                    className='focus:outline-none border border-gray-500 rounded-sm px-2 py-1 w-full' 
                    placeholder='Product Price' 
                    name='Price' 
                    value={formValues.Price}
                    onChange={(e) => handleChange(e.target.name,e.target.value)}
                    />
                    <div className='flex flex-col max-w-[200px]'>
                      <h1 className=' mb-2'>Category :</h1>
                      <div className=' bg-gray-600 px-4 rounded-full shadow-md'>
                        <select className=' gap-6 rounded-md px-2 py-1 bg-gray-600  text-white focus:outline-none font-bold w-full' 
                          onChange={(e)=> handleChange(e.target.name,e.target.value)} name='Category' value={formValues.Category}> 
                          {
                            ProductButton.map((button, index)=> (
                              <option className='relative px-4 py-1 flex items-center justify-center font-bold border border-[#BCA37F] rounded-full' 
                              value={ProductButton[index] } >

                                <h1 >{button}</h1>
                              </option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <input type="file" name="Image" className='bg-gray-600 text-white hidden ' ref={fileInputRef} 
                      onChange={(e) => handleChange(e.target.name, e.target.files[0])}/>

                    <button className='flex items-center px-4 py-2 mt-4 border border-gray-500' onClick={handleFileUploadClick}>
                      <box-icon name='upload' ></box-icon>
                      <h1 className='pl-2'>
                        { formValues.Image ? 
                        'File inserted!': "Choose Product Image" 
                        }</h1>
                    </button>
                    <button type='submit' className='px-8 rounded-full bg-gray-700 text-white hover:scale-105 mt-2 py-2 duration-300 transition-all w-fit '>Confirm</button>
                </form>
             
          </div>
      </div>
  )
}

export default AddProduct
