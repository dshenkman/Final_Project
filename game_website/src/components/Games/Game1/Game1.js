import React from 'react'
import Board from "./Board";
import "./Game1.css";

class Game1 extends React.Component {


  render() {
    return (
      <div>
        <div id="gameboard">
        <Board />

        </div>
      </div>

    );
  }

}

export default Game1;
