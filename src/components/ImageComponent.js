import React from "react";
import image1 from "../img/그림1.png";
import image2 from "../img/그림2.png";
import image3 from "../img/그림3.png";
import image4 from "../img/그림4.png";
import image5 from "../img/그림5.png";
import image6 from "../img/그림6.png";

const ImageComponent = ({ power }) => {
  let images = [];

  if (power === "NULL" || power === null) {
    images = [image1, image5,image6];
  } else if (power === "중") {
    images = [image4, image2, image6];
  } else if (power === "강" || power === "최대") {
    images = [image4, image5, image3];
  }

  return (
    <div>
      {images.map((img, index) => (
        <img key={index} src={img} alt={`image-${index}`} />
      ))}
    </div>
  );
};

export default ImageComponent;