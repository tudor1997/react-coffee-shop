import React, {useContext} from 'react'
import {ProductContext} from '../context/products'
import Loading from '../components/Loading'
import ProductList from '../components/Products/ProductsList'

 const Products = () => {
   const {loading,products} = useContext(ProductContext)
  
    if(loading) {
        return <Loading></Loading>
    }
    return <ProductList title="Our Products" products={products}></ProductList>
}

export default Products