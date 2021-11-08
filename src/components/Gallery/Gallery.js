import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../utilis/URL";
import GalleryElem from "./GalleryElem";
import { flattenProducts } from "../../utilis/helpers";
const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get(`${url}/galleries`).then((response) => {
      const gallery = flattenProducts(response.data);
      setGallery(gallery);
    });

    return () => {};
  }, []);

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
