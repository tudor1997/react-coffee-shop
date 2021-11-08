import React from 'react'

const GalleryElem = ({title, image}) => {
    
    return (
        <div className="gallery-card">
        <div className="image-gallery">
            <img src={image} alt={title} />
        </div>
        <div className="image-title">
            <h2>
           {title}
            </h2>
        </div>
    </div>
    )
}

export default GalleryElem
