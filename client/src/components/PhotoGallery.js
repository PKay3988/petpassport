import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Nav2 from "./Nav2";
import "./PhotoGallery.css";
import AddPhoto from "./AddPhoto";
// import Bird from './img/Bird.jpeg';

export const PhotoGallery = (props) => {
  const [pet, setPet] = useState(props.pet);
  const [image, setImage] = useState([]);

  const getImages = async () => {
    const result = await fetch(`/petimage/${pet.pet_id}`);
    const imageResult = await result.json();
    setImage(imageResult);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="carousel-mover">
      <div className="carousel-container">
        <Nav2 />
        <Carousel key={image.img_id}>
          {image.map((e) => (
            <Carousel.Item variant="dark" key={e.img_id}>
              <img
              width={200}
              height={200}
                key={image.image_id}
                className="d-block w-100"
                src={`/img/${e.image}`} 
                alt="slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <br />
      {/* <AddPhoto /> */}
      </div>
  );
};

export default PhotoGallery;
