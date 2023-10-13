import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
const initialState = {
    cartItems:[],
    totalAmount:0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    productName : newItem.Name,
                    image: newItem.Image,
                    price:newItem.Price,
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.Price)
            }
            state.totalAmount = state.cartItems.reduce(
                (total,item) => total + Number(item.price) + Number(item.quantity)
            )
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer