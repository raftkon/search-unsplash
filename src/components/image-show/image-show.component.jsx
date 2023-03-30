import React from "react";
import "./image-show.styles.css";

const ImageShow = ({ image }) => {
  const description =
    image.alt_description.charAt(0).toUpperCase() +
    image.alt_description.slice(1);
  return (
    <div className="card">
      <img src={image.urls.small} alt={image.alt_description} />
      <div className="container">
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default ImageShow;
