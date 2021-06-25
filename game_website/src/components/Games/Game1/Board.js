import React, {useState} from "react";
import Square from "./Square"
import "./Board.css"


const initialState =  {
  squares: Array(9).fill(null),
  IsNext: true,
  player1: {
      data: ''
},
  player2: {
    data: ''
  }
}


class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {...initialState}
    this.onClick = this.onClick.bind(this)
    this.handleData = this.handleData.bind(this)
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

  handleData(event) {
    this.setState({player2: {data: event.target.value}})
  }


  handleClick (i) {

    const squares = this.state.squares.slice();


    if (calculateWinner(squares) || squares[i]) {
      return ;
    }
    squares[i] = this.state.IsNext ? this.state.player1.data : this.state.player2.data
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
       status = `Now Up: ${this.state.IsNext ? this.state.player1.data : this.state.player2.data }`
     }

    return (
      <div className  = 'gamebox'>
      <div className = 'title'>Tic-Tac-Toe </div>
          <div>
          <input type="text" placeholder="Player 2" id="player1" />
          <button onClick = {(event) => this.setState({
            player1: {
                data: event.target.value
          }

          }) }>Enter </button>

          <input type="text" placeholder="Player 2" id="player2" />
          <button onClick = {this.handleData}>Enter</button>



          </div>


      <div className = 'gameboard'>
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
