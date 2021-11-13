import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./PhotoGallery.css";
// import Bird from './img/Bird.jpeg';


export const PhotoGallery = () => {
    const [image, setImage] = useState([]);

const getImages = async() => {
    const result = await fetch ("/image"
    )
    const imageResult = await result.json();
    setImage(imageResult); 
}

useEffect(() => {
    getImages();
}, [])






    return (
        <div>
            <div className="carousel-container">
            

            <Carousel key={image.image_id}>
        {image.map((e) => (<Carousel.Item key={e.image_id}>
    <img
      key={image.image_id}
      className="d-block w-100"
      src={`/img/${e.image}`}
      alt="slide"
    />
    
  </Carousel.Item>))}
</Carousel>
        
        </div>    
        </div>
    )
}

export default PhotoGallery;