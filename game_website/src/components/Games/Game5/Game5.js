import React from 'react'
import Board from './Board'

import './game5.scss'



class Game5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: [2, 7, 3, 4, 1, 0, 5, 8, 6], size: 3 };
  }
  newGame(size) {
    let board = new Array(size * size);
    for (let i = 0; i < size * size; ++i) board[i] = i;
    board = this.shuffle(board);
    this.updateBoard(board, size);
    this.setState({ size: size });
  }
  updateBoard(board, size) {
    this.setState({ board: board });
  }
  shuffle(o) {
    const temp = o.slice();
    for(var j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
    return temp;
  }
  render() {
    return (
      <div className='puzzle'>
        <h1 id="puzzle1">Sliding Puzzle</h1>
        {
          this.state && this.state.board ?
            <Board size={this.state.size} board={this.state.board} updateBoard={this.updateBoard.bind(this)}/>
            : null
        }
        <input id="puzzlebutton" type='submit' value='New Game' onClick={this.newGame.bind(this, 3)} />

      </div>
    );
  }
}

export default Game5
