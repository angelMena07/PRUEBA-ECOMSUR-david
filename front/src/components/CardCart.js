import React, { useEffect } from 'react'

import '../assets/styles/cartPage.scss';
import exit from '../assets/img/delete.svg';

export const CardCart = ({product, deleteProduct }) => {

    useEffect(() => {
       console.log(product);
    }, [])

    return (
        <div className="cart-card">
            <div className="img">
             <img src={`http://localhost:5000${product.product.image}`} />
                
            </div>
            <div className="info">
                {product.product.name}
            </div>
            <div className="price">
                {`$${product.product.price}`}
            </div>
            <div>
                cantidad: {product.qty}
            </div>
                <img onClick={() => deleteProduct(product)} className="delete" src={exit}/>
        </div>
    )
}
