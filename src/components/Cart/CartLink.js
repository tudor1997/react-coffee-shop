import React from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/cart'
const CartLink = () => {
    const {cartItems} = React.useContext(CartContext);
    return (
        <Link to='/cart' className="link cart">
        <i className="fas fa-cart-plus"></i>
        <span>{cartItems}</span>
        </Link>
    )
}

export default CartLink
