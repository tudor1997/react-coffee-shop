import React from 'react'
import {Link} from 'react-router-dom';
const Product = ({image, title, id , price}) => {
    
    return (
        <div className="product-card">
        <div className="product-image">
            <img src={image} alt={title} />
            <Link className="product-details" to={`products/${id}`}>Details</Link>
        </div>
        <div className="product-info">
            <p className="product-title">{title}</p>
            <p className="product-price">${price}</p>
        </div>
    </div>
    )
}

export default Product
