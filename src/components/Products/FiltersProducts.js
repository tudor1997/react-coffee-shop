import React from 'react'
import {ProductContext} from '../../context/products'
const FiltersProducts = () => {

    const {filters:{search,price},
    updateFilters,
    sorted
} = React.useContext(ProductContext)

    return (
        <div className="filters-section">
            <h2 className="filter-title"> Search products</h2>
            <form className="filters-form">
        
                {/* search input */}
                <div className="form-group-filter">
                    <label htmlFor="search">Search Term</label>
                    <input type="text" id="search" name="search" 
                    value={search} onChange={updateFilters} className="form-control-filter" />
                </div>
                {/* end of search input */}
          
            <div className="price-group">
                <p>Price :</p>
                <label> <input type="radio" 
                name="price" value="all" 
                checked={price === "all"} 
                onChange={updateFilters}/>
                All
                </label>
                <label> <input type="radio" 
                name="price" value="0" 
                checked={price === 0} 
                onChange={updateFilters}/>
                0$ - 5$
                </label>
                <label> <input type="radio" 
                name="price" value="5" 
                checked={price === 5} 
                onChange={updateFilters}/>
                5$ - 7$
                </label>
                <label> <input type="radio" 
                name="price" value="7" 
                checked={price === 7} 
                onChange={updateFilters}/>
                7$ - 10$
                </label>
                <label> <input type="radio" 
                name="price" value="10" 
                checked={price === 10} 
                onChange={updateFilters}/>
                Over 10$
                </label>
            </div>
            <hr />
            <h6 className="filter-total-products">Total Products : {sorted.flat().length}</h6>
            </form>
        </div>
    )
}

export default FiltersProducts
