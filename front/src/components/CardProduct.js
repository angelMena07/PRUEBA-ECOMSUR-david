import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



import cartImg from '../assets/img/icon-cart.png'
import { increment } from '../redux/cartSlice';

import { Toast } from '../swal/toast';
import { RatingView } from 'react-simple-star-rating'



export const CardProduct = ({ product }) => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cartItems)


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
            dispatch(increment({ product, qty: 1 }));

            if (validateStock()) {
                return
            }

            Toast.fire({
                icon: 'success', title: 'Añadido correctamente',
            })
        } else {
            Toast.fire({
                icon: 'error', title: 'No hay productos disponibles',
            })
        }
    }

    const validateStock = () => {
        let index = cart.findIndex(item => item.product._id === product._id);
        if (index !== -1 && cart[index].qty >= product.countInStock) {
            Toast.fire({
                icon: 'error', title: 'No hay productos disponibles',
            })
            return true
        } else {
            return false
        }
    }

    return (
        <div className="card">
            <img onClick={() => addCart()} src={cartImg} id="cart" />

            <Link to={`product/${product._id}`}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <div id="stars">
                        <RatingView ratingValue={product.rating} />
                    </div>
                    <span id="review"> Reseñas: ({product.numReviews}) </span>
                    <img className="img" src={img} />
                </div>

                <div className="info">
                    <div className="name">{product.name}</div>
                    <div className="price">{`$${product.price}`}</div>


                </div>
            </Link>
        </div>
    )
}
