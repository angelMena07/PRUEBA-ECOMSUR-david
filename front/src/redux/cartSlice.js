import { createSlice, current } from '@reduxjs/toolkit'

const CART_STORAGE = 'CART';
const getInitialItems = JSON.parse(localStorage.getItem(CART_STORAGE));


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: getInitialItems || [],
        totalAmount: 0,
    },
    reducers: {
        increment: (state, action) => {
            console.log('añadiendo prod', action.payload);
            let cart = current(state.cartItems)

            let found = cart.findIndex(item => item.product._id === action.payload.product._id)
            if (found !== -1) {
                let finalCart = cart.map(item => {
                    let deepClone = JSON.parse(JSON.stringify(item));
                    if (item.product._id === action.payload.product._id) {

                        console.log("sdfsdfsdfsdf", item.product.countInStock, item.qty);

                        if (item.product.countInStock > item.qty) {
                            deepClone.qty += action.payload.qty;
                        } else {
                            deepClone.qty = item.product.countInStock;

                        }
                    }
                    return deepClone;
                });
                state.cartItems = finalCart
            } else {
                state.cartItems.push(action.payload)
            }

            localStorage.setItem(CART_STORAGE, JSON.stringify(state.cartItems))
        },
        decrement: (state, action) => {
            console.log('recibi', action.payload);
            const items = state.cartItems.filter(item => item.product._id !== action.payload._id)
            state.cartItems = items;

            localStorage.setItem(CART_STORAGE, JSON.stringify(items))
        },
    },
})

export const { increment, decrement, total } = cartSlice.actions

export default cartSlice.reducer