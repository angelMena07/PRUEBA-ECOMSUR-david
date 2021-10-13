import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from 'react-router-dom';
// import { Navbar } from '../components/global/Navbar';
import { CartPage } from '../pages/CartPage';
import { Product } from '../pages/Product';
import { Products } from '../pages/Products';

export const AppRouter = () => {
    return (
        <Router>
            {/* <Navbar /> */}

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
            <Switch>
                <Route exact path="/cart" component={CartPage} />
                <Route exact path="/product/:id" component={Product} />
                <Route exact path="/" component={Products} />
            </Switch>
        </Router>
    );
}