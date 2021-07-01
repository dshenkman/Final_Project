import React from "react";
import classnames from "classnames";
import pokeball from "./images/pokeball.png";
import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={"https://previews.123rf.com/images/oliafedorovsky/oliafedorovsky1512/oliafedorovsky151200007/50212063-abstract-colorful-hand-sketched-swirls-circles-seamless-background-pattern-vector-illustration-patte.jpg"} alt="card" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="card" />
      </div>
    </div>
  );
};

export default Card;
