import React from 'react'
import { AppRouter } from '../router/AppRouter'
import axios from 'axios';

export const Products = () => {

   const getProducts = async () => {
       let res = await axios.get(`http://localhost:5000/api/products`)
    }

    getProducts()

    return (
        <div>
            Productos 
        </div>
    )
}

