import React, {useContext} from 'react'
import {ProductContext} from '../context/products'
import Loading from '../components/Loading'

import PageProducts from '../components/Products/pageProducts'
 const Products = () => {
   const {loading,products} = useContext(ProductContext)
  
    if(loading) {
        return <Loading></Loading>
    }
    return <PageProducts ></PageProducts>
}

export default Products