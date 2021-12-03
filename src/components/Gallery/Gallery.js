import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import url from "../../utilis/URL";
import GalleryElem from "./GalleryElem";
import { flattenProducts } from "../../utilis/helpers";
import {ProductContext} from '../../context/products'
const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const {loading} = useContext(ProductContext)
  useEffect(() => {
    axios.get(`${url}/galleries`).then((response) => {
      const gallery = flattenProducts(response.data);
      setGallery(gallery);
    });

    return () => {};
  }, []);
  if(loading) {
    return <section className="loading-gallery">
      <h2 className="loading-text">Loading...</h2>
    </section>
  }
  return (
    <section className="gallery">
      <h1>Our Gallery</h1>
      <div className="gallery-container">
        {gallery.map((item) => {
          return <GalleryElem key={item.id} {...item}></GalleryElem>;
        })}
      </div>
    </section>
  );
};

export default Gallery;
