import React from 'react'
import Cake1 from '../home/homeImage/Cake1.jpg'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
const Cart = () => {
    const dispatch = useDispatch()
    const handlePurchase = () => {
        Swal.fire({
            icon:'question',
            title: 'Confirm Your Purchase?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Purchase Successful!', '', 'success')
                dispatch(cartActions.removeAllItem())
            } else if (result.isDenied) {
                Swal.fire('Purchase has been cancelled', '', 'info')
            }
        })
    }
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <div className='w-full flex justify-center py-24 px-2 md:px-12 font-poppins'>
            <div className='max-w-[1300px] w-full flex  flex-col  gap-4'>
                {cartItems.length === 0 ? 
                    <h1 className='text-center text-xl md:text-4xl col-span-2 md:col-span-4 my-4'>Your Cart Is Empty !</h1>
                    :
                    <table className=' w-full'>
                        <thead className='border-b-2  border-gray-600 '>
                            <tr>
                                <th className='py-2 pl-2'>Image</th>
                                <th className='py-2 pl-2'>Name</th>
                                <th className='py-2 pl-2'>Price</th>
                                <th className='py-2 pl-2'>Qty</th>
                                <th className='py-2 pl-2'>Delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                cartItems.map((item, index) => (
                                    <Tr item={item} key={index}/>
                                ))
                            }
                        </tbody>
                    </table>
                }
                <div className='p-4  max-w-[350px] w-full rounded-sm flex flex-col self-end'>
                    <h1 className='w-full  text-xl md:text-3xl font-bold'>Summary</h1>
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
                    <button className='w-full rounded-full bg-gray-700 text-white hover:scale-105 mt-2 py-2 duration-300 transition-all' onClick={handlePurchase}>Checkout</button>
                </div>
            </div>

        </div>
  )
}

const Tr = ({item}) => {
    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return(
        <tr className='text-center'>
            <td className='pl-2 py-2 flex justify-center'><img src={item.image} alt="" className='w-20 h-20 '/></td>
            <td className='py-2 pl-2'>{item.productName}</td>
            <td className='py-2 pl-2'>{item.price}</td>
            <td className='py-2 pl-2'>{item.quantity}</td>
            <td className='py-2 pl-2'><box-icon type='solid' name='trash-alt' color='red' onClick={deleteItem}></box-icon></td>
        </tr>
    )
}
export default Cart
