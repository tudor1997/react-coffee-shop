import React from 'react'
import Product from './Product'


const ProductsList = ({products,title}) => {
    return (
        <section className="products-list">
            <h1 className="filter-title">{title}</h1>
  
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
