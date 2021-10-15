import React, { useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
import '../../assets/styles/navbar.scss';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const cart = useSelector((state) => state.cart.cartItems)

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Productos
                            </NavLink>
                    </li>
                    <li className="button">
                        <Link to="/cart">
                            Carrito ({cart.length})
                            </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
