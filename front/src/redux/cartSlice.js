import { createSlice } from '@reduxjs/toolkit'

const CART_STORAGE = 'CART';
const getInitialItems = JSON.parse(localStorage.getItem(CART_STORAGE));

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: getInitialItems || [],
    },
    reducers: {
        increment: (state, action) => {
            console.log('añadiendo prod', action.payload);

            //    let item = state.cartItems.find(item => item.product._id == action.payload.product._id);

            //    if (item != undefined) {
            //        console.log(item);
            //     //    item.qty =+ action.payload.qty 
            //    }

            state.cartItems.push(action.payload)

            localStorage.setItem(CART_STORAGE, JSON.stringify(state.cartItems))
        },
        decrement: (state, action) => {
            console.log('recibi', action.payload);
            const items = state.cartItems.filter(item => item._id !== action.payload._id)
            state.cartItems = items;

            localStorage.setItem(CART_STORAGE, JSON.stringify(items))
        },
    },
})

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer