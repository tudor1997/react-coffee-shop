import React from 'react'
import Product from './Product'


const ProductsList = ({title, products}) => {
    return (
        <section className="products-list">
           <h2 className="section-title">{title}</h2>

           <div className="products-container">
            {products.map((product)=>{
                return (
                    <Product key={product.id} {...product}></Product>
                )
            })}
           </div>
        </section>
    )
}

export default ProductsList
