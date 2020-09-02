import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, cart) => total + cart.price , 0);
    return (
        <div className="cart fixed-bottom">
            <h5 className="bottom text-center"><FontAwesomeIcon icon={faShoppingBag} /> {cart.length}</h5>
            <h5 className="bottom">Total Price: {total}</h5>
        </div>
    );
};

export default Cart;