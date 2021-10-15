import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { increment } from '../redux/cartSlice';
import { Toast } from '../swal/toast';
import { RatingView } from 'react-simple-star-rating'

import '../assets/styles/product.scss'
export const Product = () => {

    const dispatch = useDispatch()

    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            let { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    const addCart = () => {
        if (product.countInStock > 0) {
            dispatch(increment({product, qty:1}));
            // dispatch(increment(product));
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
        <section id="product">
            <div className="product">
                <div className="title"> Información detallada del producto </div>
                <div className="row">
                    <div className="col img">
                        <img src={`http://localhost:5000${product.image}`} />
                    </div>
                    <div className="col info">
                        <h2>
                            {product.name}
                        </h2>
                        <div style={{display:'flex'}}>
                        <RatingView ratingValue={product.rating}  /> <span style={{marginLeft:'20px'}}> Reseñas: ({product.numReviews}) </span>
                        </div>
                        <p>
                            {product.description}
                        </p>
                        <p>
                           <strong>Marca:</strong>  {product.brand}
                        </p>
                        <p>
                           <strong>Categoría:</strong>  {product.category}
                        </p>
                        <p>
                            <strong>Precio:</strong>  {`$${product.price}`}
                        </p>
                        <div className={product.countInStock > 0 ? 'button': 'button disabled'} 
                             onClick={() => addCart() }
                        >Añadir al carrito</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
