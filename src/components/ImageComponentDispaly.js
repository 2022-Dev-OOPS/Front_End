import React from "react";
import image1 from "../img/그림1.png";
import image2 from "../img/그림2.png";
import image3 from "../img/그림3.png";
import image4 from "../img/그림4.png";
import image5 from "../img/그림5.png";
import image6 from "../img/그림6.png";
const ImageComponent = ({ power }) => {
  let images = [];
  console.log("test : "+ power);
  if (power === 0 || power === null || power === "NULL") {
    images = [image1, image5,image6];
  } else if (power === 1) {
    images = [image4, image2, image6];
  } else if (power === 2 || power === 3) {
    images = [image4, image5, image3];
  }

  return (
    <div style={{ height: '250px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {images.map((img, index) => (
        <img key={index} src={img} alt={`image-${index}`} style={{ margin: '30px' }} />
      ))}
    </div>
  );
  }
export default ImageComponent;
