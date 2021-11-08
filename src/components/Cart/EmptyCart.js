import React from 'react'
import { Link } from 'react-router-dom'


const EmptyCart = () => {
    return (
        <section className="emptyCart">
               <h2>Cart is Empty...</h2>
               <Link to="/products" className="btn-emptyCart">FILL IT</Link>
        </section>
    )
}

export default EmptyCart
