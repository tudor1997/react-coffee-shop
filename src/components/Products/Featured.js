import React from 'react'

import ProductList from './ProductsList'
import {ProductContext} from '../../context/products'
import Loading from '../Loading'

const Featured = () => {
    const { loading , featured} = React.useContext(ProductContext);
      if(loading){
          return <Loading/>
      }
    return (
     <ProductList title="Featured Products" products={featured}></ProductList>
  
    )
}

export default Featured
