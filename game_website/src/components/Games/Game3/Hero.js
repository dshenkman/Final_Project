import React from 'react';
import './hero.css';

const Hero =({hero, handleClick}) => {
  // const {hero} = props;
  const {image, name, occupation, id} = hero;
  return (

    <div className="sh">

      <div className= 'hero' style={{backgroundImage: `url(${image})`}} onClick = {()=>handleClick(id)} >
    
        </div>
    </div>
  )

}

export default Hero
