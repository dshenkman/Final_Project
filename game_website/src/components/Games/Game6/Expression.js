import React from 'react'
import './game6.scss'

const TIME = 30; // Initial game duration, in seconds

class Expression extends React.PureComponent {



  render() {
    const {from, to} = this.props;
    return (
      <div className='expression' ref={ref => this.ref = ref}>
        <div className='from'>
          <div className='text123'>{from}</div>
          <div className='box123'>?</div>
        </div>
        <div className='to'>
          <div className='text123'>{to}</div>
          <div className='box123'>?</div>
        </div>
      </div>
    );
  }
}


export default Expression
