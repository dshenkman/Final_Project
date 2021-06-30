import React from 'react'
import './game6.css'

  const createArray = (size) =>
  Array.from({ length: size }, (_, i) => i);
class Cell extends React.Component {
  backgroundColor = () => {
    if (this.props.showAsSelected) {
      return this.props.cellIsChallenge ? 'green' : 'red';
    }
    if (this.props.showAsChallenge) {
      return 'blue';
    }
    return 'white';
  };
  handleClick = () => {
    this.props.onClick(this.props.id);
  };
  render() {
    return (
      <div
        className="cell"
        style={{
          width: `${this.props.width}%`,
          backgroundColor: this.backgroundColor(),
        }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Cell
