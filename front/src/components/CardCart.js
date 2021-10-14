import React from 'react'

import '../assets/styles/cartPage.scss';
import exit from '../assets/img/delete.svg';

export const CardCart = ({product, deleteProduct }) => {

    return (
        <div className="cart-card">
            <div className="img">
             <img src={`http://localhost:5000${product.image}`} />
                
            </div>
            <div className="info">
                {product.name}
            </div>
            <div className="price">
                {`$${product.price}`}
            </div>
                <img onClick={() => deleteProduct(product)} className="delete" src={exit}/>
        </div>
    )
}
