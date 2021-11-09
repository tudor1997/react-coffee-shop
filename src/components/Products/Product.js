import React from 'react'
import {Link} from 'react-router-dom';
// impt PropTypes
import PropTypes from 'prop-types'

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
Product.prototype = {
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    id:PropTypes.number.isRequired
}
export default Product
