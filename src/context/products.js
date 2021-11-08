import React, {useState, useEffect} from 'react'
import axios from 'axios'
import url from '../utilis/URL'
import { flattenProducts, featuredProducts } from '../utilis/helpers';
export const ProductContext = React.createContext();


// Provider , Consumer , useContext


const ProductProvider = ({children}) => {

    
useEffect(() =>{
    setLoading(true);
    axios
    .get(`${url}/products`)
    .then((response) =>{
        const products = flattenProducts(response.data);
        setProducts(products);
        const featured = featuredProducts(flattenProducts(response.data))
        setFeatured(featured);
        setLoading(false);
    })
    return () => {

    }
},[])

    const [loading, setLoading] = useState(false);
    const [featured, setFeatured] = useState([]);
    const [products, setProducts] = useState([]);


    return (
        <ProductContext.Provider value={{products,loading,featured}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
