

// flaten

export function flattenProducts(data){
    return data.map(item => {
        // cloudinary
        let image = (item.image ? item.image.url : null);
        return {...item, image};
    })
}

export function featuredProducts(data){
    return data.filter(item => {
        return item.featured === true;
    })
}

// Paginate
export function paginate(products) {
    const itemPerPage = 5;
    const numberOfPages = Math.ceil(products.length / itemPerPage);

    const newProducts = Array.from({length: numberOfPages},(_,index)=>{
        const start = index * itemPerPage
        return products.slice(start,start + itemPerPage)
    })
  
    return newProducts;
}