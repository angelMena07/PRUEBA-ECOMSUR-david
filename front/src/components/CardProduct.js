import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import cart from '../assets/img/icon-cart.png'

export const CardProduct = ({ product }) => {

    const [img, setImg] = useState('');


    useEffect(() => {
        getImgById();
    }, [])

    const getImgById = async() => {
        let img = `http://localhost:5000${product.image}`;
        setImg(img)
    }


    return (
        <div className="card">
            <Link to={`product/${product._id}`}>
            <img src={cart} id="cart" />
            <img className="img" src={img} />
            <div className="info">
                {product.name}
            </div>
        </Link>
        </div>
    )
}
