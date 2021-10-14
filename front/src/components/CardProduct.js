import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



import cart from '../assets/img/icon-cart.png'
import { increment } from '../redux/cartSlice';

import { Toast } from '../swal/toast';



export const CardProduct = ({ product }) => {

    const dispatch = useDispatch()


    const [img, setImg] = useState('');


    useEffect(() => {
        getImgById();
    }, [])

    const getImgById = async () => {
        let img = `http://localhost:5000${product.image}`;
        setImg(img)
    }

    const addCart = () => {
        if (product.countInStock > 0) {
            // dispatch(increment({product, qty:1}));
            dispatch(increment(product));
            Toast.fire({
                icon: 'success', title: 'Añadido correctamente',
            })
        } else {
            Toast.fire({
                icon: 'error', title: 'No hay productos disponibles',
            })
        }
    }

    return (
        <div className="card">
            <img onClick={() => addCart()} src={cart} id="cart" />
            <Link to={`product/${product._id}`}>
                <img className="img" src={img} />
                <div className="info">
                    {product.name}
                </div>
            </Link>
        </div>
    )
}
