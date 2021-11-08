import React  from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';
import { useHistory } from 'react-router';
import Loading from '../components/Loading'
const ProductDetails = () => {
 const {id} = useParams();
 const history = useHistory();
 const {products} = React.useContext(ProductContext);
const {addToCart} = React.useContext(CartContext);

 const product = products.find(item => item.id === parseInt(id));
if(products.length === 0){
    return <Loading></Loading>;
}else{
    const {image, title, price, description} = product 
    return (
        <section className="single-product">
           <img src={image} alt={title}  className="single-product-image"/>
           <article className="single-product-info">
                    <h1>{title}</h1>
                    <h2>${price}</h2>
                    <p>{description}</p>
                    <button className="addToCart" onClick={() => {
                        addToCart(product);
                        history.push('/cart');
                    }}>Add to cart</button>
           </article>
        </section>
    )
}
    
}

export default ProductDetails
