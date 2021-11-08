import React from 'react'
import { CartContext } from '../context/cart'
import { UserContext } from '../context/user'
import EmptyCart from '../components/Cart/EmptyCart'
import CartItem from '../components/Cart/CartItem'
import { Link } from 'react-router-dom'
// import {UserContext} from '../context/user'



const Cart = () => {
   
    const {cart, total} = React.useContext(CartContext);
    const {user, setUser} = React.useContext(UserContext);
    if(cart.length === 0) {
        return <EmptyCart></EmptyCart>
    }
    return (
        <section className="cart-items">
            <h2 className=" section-title">Your Cart</h2>
            <div className="cart-container">
            {cart.map((item) => {
                return <CartItem key={item.id} {...item}></CartItem>
            })}
                 
                 
            </div>
            <h2 className="total">Total: $ {total}</h2>
           
            
       {user.token ?  <Link to="/checkout" className="btn-cart">Checkout</Link> : <Link to="/login" className="btn-cart">Login</Link>}
        </section>
    )
}

export default Cart
