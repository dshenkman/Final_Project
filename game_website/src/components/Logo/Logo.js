import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import game from './game-icon.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150 }} >
         <div className="Tilt-inner pa3">
         <p className="box">KidsGames.com</p>
         <div className= "box">
            <img style={{paddingTop: '5px', height: '70px'}} src={game} alt="logo"/>
         </div>
         </div>
      </Tilt>
    </div>
    );

}

export default Logo
