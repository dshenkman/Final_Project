import React from 'react'
import './game6.css'
import Cell from './Cell'
import difference from 'lodash/difference'

class Game extends React.Component {
  static messages = {
    new: 'Click the Start button to play',
    challenge: 'Memorize these blue cells',
    playing: 'Recall the cells that were blue',
    won: 'You Win!',
    lost: 'Game Over!',
  };
  state = {
    gameStatus: 'new', // new, challenge, playing, won, lost
    selectedCells: [],
  };
  grid = new Array(1,2,3,4,5,6,7,8);
  cellWidthPercentage = 100 / 4
  challengeCells = [];
  startGame = () => {
    clearTimeout(this.timerId);

    this.setState(
      () =>
        (this.timerId = setTimeout(
          () => this.setState({ gameStatus: 'playing' }),
          3000
        ))
    );
  };
  onCellClick = (cellId) => {
    if (this.state.gameStatus != 'playing') {
      return;
    }
    if (this.state.selectedCells.indexOf(cellId) >= 0) {
      return;
    }
     this.setState((prevState) => ({
      selectedCells: [...prevState.selectedCells, cellId],
      gameStatus: this.calcNewGameStatus(
        [...prevState.selectedCells, cellId]
      ),
    }));
  };

  calcNewGameStatus = (newSelectedCells) => {
  if (newSelectedCells.length === 0) {
    return 'won';
  }
  if (newSelectedCells.length === this.props.wrongsAllowed) {
    return 'lost';
  }
  return 'playing';
};


  showSelectedCells = () =>
    ['playing', 'won', 'lost'].includes(this.state.gameStatus);
  gameIsIdle = () =>
    ['new', 'won','lost'].includes(this.state.gameStatus);
  render() {
    return (
      <div className="game">
        <div className="grid">
          {this.grid.map((cellId) => {

            const cellIsSelected =
              this.state.selectedCells.indexOf(cellId) >= 0;
            return (
              <Cell
                key={cellId}
                id={cellId}
                onClick={this.onCellClick}

                showAsSelected={
                  this.showSelectedCells() && cellIsSelected
                }
                width={this.cellWidthPercentage}
              />
            );
          })}
        </div>
        {this.gameIsIdle() && (
          <button onClick={this.startGame}>
            {this.state.gameStatus === 'new'
               ? 'Start'
               : 'Play Again'}
          </button>
        )}
        <div className="message">
          {Game.messages[this.state.gameStatus]}
        </div>
      </div>
    );
  }
}

export default Game
