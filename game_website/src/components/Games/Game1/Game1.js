import React from 'react'
import Board from "./Board";
import "./Game1.css";

class Game1 extends React.Component {


  render() {
    return (
      <div className="game-board">
        <div className="game">
          <Board />
        </div>
      </div>

    );
  }

}

export default Game1;
