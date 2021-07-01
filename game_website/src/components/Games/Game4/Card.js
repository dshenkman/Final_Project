import React from "react";

const Card = props => {
  const { imgSource, imgDesc, className, onClick } = props;
  return (
    <div className={`grid-card ${className}`} onClick={onClick}>
      <img
        className={`img-thumbnail img-fluid grid-img`}
        style={{height: '100px', width: '100px'}}
        src={imgSource}
        alt={imgDesc}
      />
    </div>
  );
};

export default Card;
