import React, {useState} from "react";
import Square from "./Square"
import "./Board.css"


const initialState =  {
  squares: Array(9).fill(null),
  IsNext: true,
}



class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {...initialState}
    this.onClick = this.onClick.bind(this)
    this.getData = this.getData.bind(this)
  }



  getData (val) {

  this.setState({player1: {
      data: val.target.value
},
  player2: {
    data: val.target.value
  }})
  console.warn(val.target.value);

}


  onClick() {
    this.setState(initialState)

  }



  handleClick (i) {

    const squares = this.state.squares.slice();


    if (calculateWinner(squares) || squares[i]) {
      return ;
    }
    squares[i] = this.state.IsNext ?


  'X'

     :



  'O'

    this.setState({
      squares: squares,
      IsNext: !this.state.IsNext,
    })
  }



  renderSquare(i) {
    return (
     <Square
    value={this.state.squares[i]}
    onClick = {() => this.handleClick(i)}
      />
    )
  }

  render() {




    // const [data, setData] = useState(null);
    // const [print, setPrint] = useState(false)
    const winner = calculateWinner(this.state.squares);
    let status;




    if (winner) {
      status = ` ${winner} WINS!!`
    } else {
       status = `It is now ${this.state.IsNext ? 'X': 'O' }'s turn!`
     }

    return (
      <div className  = 'gamebox'>
        <div className= 'center'>
          <h2 className = 'title'>Tic-Tac-Toe </h2>


            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
            <button className = 'reset' onClick = {this.onClick}>Reset</button>
            </div>
      </div>
    );
  }


   }
   function calculateWinner (squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
}

export default Board
