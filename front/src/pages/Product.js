import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

import '../assets/styles/product.scss'
export const Product = () => {

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

    return (
        <section id="product">
            <div className="Product">
                <div className="row">
                    <div className="col img">
                        <img src={`http://localhost:5000${product.image}`}/>
                    </div>
                    <div className="col info">
                        <h2>
                            {product.name}
                        </h2>
                        <p>
                            {product.description}
                        </p>
                        <p>
                            {product.price}
                        </p>
                        <p>
                            {product.price}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
