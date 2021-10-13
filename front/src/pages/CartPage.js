import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CardCart } from '../components/CardCart';

export const CartPage = () => {

    const [products, setproducts] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(async() => {
       await getProducts();
    }, [])

    const getProducts = async () => {
        try {
            let { data } = await axios.get(`http://localhost:5000/api/products`)
            let totalProd = 0
            console.log(data);
            setproducts(data)
            data.map(prod =>  {
                totalProd = totalProd + prod.price
             })
             setTotal(totalProd)
        } catch (error) {
            console.log(error);
            throw error;
        }
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
                    products.map(prod => {
                        return <CardCart key={prod._id} product={prod} />
                    })
                }
            </div>
            <div className="total">
               <strong>Subtotal:</strong>  {`$${total}`}
            </div>
        </div>
    )
}
