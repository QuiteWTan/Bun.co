import React from 'react'
import useGetData from '../custom-hooks/useGetData'
import { db } from '../../../firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
const Users = () => {
    const {data} = useGetData('users')
    return (
      <div className='w-full flex justify-center py-4 px-2 md:px-12 font-poppins'>
        {data.length === 0 ? 
          <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-4'>Users Data Is Empty !</h1>
          :
          <div className='max-w-[1300px] w-full flex  flex-col  gap-4'>
            <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-4'>All Users </h1>
            <table className=' w-full'>
                <thead className='border-b-2  border-gray-600 '>
                    <tr>
                        <th className='py-2 pl-2'>Image</th>
                        <th className='py-2 pl-2'>UID</th>
                        <th className='py-2 pl-2'>Name</th>
                        <th className='py-2 pl-2'>Email</th>
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
        }
      </div>
    )
  }
  
const Tr = ({item}) => {
    const deleteItem = async(id) => {
        await deleteDoc(doc(db,'users', id))
        toast.success("Users Deleted")
    }
    return(
        <tr className='text-center'>
            <td className='pl-2 py-2 flex justify-center'><img src={item.photoURL} alt="" className='w-20 h-20 '/></td>
            <td className='py-2 pl-2'>{item.uid}</td>
            <td className='py-2 pl-2'>{item.displayName}</td>
            <td className='py-2 pl-2'>{item.email}</td>
            <td className='py-2 pl-2'><button><box-icon type='solid' name='trash-alt' color='red' onClick={() => deleteItem(item.uid)}></box-icon></button></td>
        </tr>
    )
  }
  export default Users
