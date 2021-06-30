import React from 'react'

const Nav = ({Score, top_Score}) => {
  // const {Score, top_Score} = props;
  return (
    <div >
      <h2 style={{color: "#008099"}}>Super Heroes Memory Game</h2>
      <p style={{color: "#008099"}}>Task: Try to click on all of the superheroes without clicking on anyone twice</p>
      <p style={{color: "#008099"}}>Score : {Score}</p>
    </div>
  )

}

export default Nav
