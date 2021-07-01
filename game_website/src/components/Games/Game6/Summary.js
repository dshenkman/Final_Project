import React from 'react'
import './game6.scss'



class Summary extends React.PureComponent {

  componentDidMount() {
    // Hide the summary initially until it's rendered once to skip the initial bounce up animation
    this.mounted = true;
  }

  render() {
    const {show, score, onPlayAgain} = this.props;
    return (
      <div className={`summary ${!this.mounted ? 'hidden' : ''} animated ${show ? 'bounceInDown' : 'bounceOutUp'}`}>
        <div className='title123'>
          <div className='big123'>GOOD JOB!</div>
          Your Score is:
        </div>
        <div className='button123' onClick={onPlayAgain}>PLAY AGAIN</div>
      </div>
    );
  }
}
export default Summary
