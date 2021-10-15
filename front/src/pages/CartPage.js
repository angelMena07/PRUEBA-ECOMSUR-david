import React, { useEffect, useState } from 'react'
import { CardCart } from '../components/CardCart';

import { useSelector, useDispatch } from 'react-redux';
import { decrement } from '../redux/cartSlice';
import { Toast } from '../swal/toast';


export const CartPage = () => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart.cartItems)


    const [total, setTotal] = useState(0)

    useEffect(async () => {
        console.log("carrito en redux", cart);
        getTotal();
    }, [])

    const deletCart = (p) => {
        dispatch(decrement(p));
        setTimeout(() => {
            getTotal();
            
        }, 500);

        Toast.fire({
            icon: 'success', title: 'Producto eliminado',
            customClass: 'swal-custom'
        })
    }

    const getTotal = () => {
        console.log("carrito en redux", cart);
        let totalAmount = 0
        cart.map(item => {
            totalAmount = totalAmount + (item.product.price * item.qty) 
        })
        console.log(totalAmount);
        setTotal(totalAmount);
    }

    return (
        <div id="cart">
            <div className="title">
                <h2>
                    Carrito
                </h2>
            </div>
            <div className="col">
                {
                    cart.map(prod => {
                        return <CardCart deleteProduct={(p) => deletCart(p)} key={prod.product._id} product={prod} />
                    })
                }
            </div>
            <div className="total">
                <strong>Subtotal:</strong>  {`$${total.toFixed(2)}`}
            </div>
        </div>
    )
}
