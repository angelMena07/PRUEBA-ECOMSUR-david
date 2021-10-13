import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
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
    )
}
