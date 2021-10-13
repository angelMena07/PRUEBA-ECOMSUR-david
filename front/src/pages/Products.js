import React, { useState, useEffect } from 'react'
import { AppRouter } from '../router/AppRouter'
import axios from 'axios';
import { CardProduct } from '../components/CardProduct';


export const Products = () => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        try {
            let { data } = await axios.get(`http://localhost:5000/api/products`)
            console.log(data);
            setproducts(data)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    return (
        <div className="grid">
            Productos
            <div className="row">
                {
                    products.map(prod => {
                        return  <CardProduct key={prod._id} product={prod}  />
                    })
                }
            </div>
        </div>
    )
}

