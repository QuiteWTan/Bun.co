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
                    quantity:1,
                    totalPrice: newItem.Price
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.Price)
            }
            console.log(state.totalAmount)
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.totalPrice), 0)

            console.log(state.totalAmount)
        
        },
        deleteItem:(state,action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if(existingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce(
                (total,item) => total + Number(item.Price) * Number(item.quantity),0
            )
        },
        removeAllItem: (state)=> {
            state.cartItems= []
            state.totalQuantity=0
            state.totalAmount=0
        }

    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer