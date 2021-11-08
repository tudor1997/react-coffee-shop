

// flaten

export function flattenProducts(data){
    return data.map(item => {
        // cloudinary
        let image = item.image.url;
        return {...item, image};
    })
}

export function featuredProducts(data){
    return data.filter(item => {
        return item.featured === true;
    })
}