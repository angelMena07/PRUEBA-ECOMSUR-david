import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import '../../assets/styles/navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Productos
                            </NavLink>
                    </li>
                    <li>
                        <Link to="/cart">
                            Carrito
                            </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
