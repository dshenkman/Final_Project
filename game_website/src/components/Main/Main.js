import React from 'react';
import Logo from '../Logo/Logo'
import Customize from '../Customize/Customize'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './main.css'


class Main extends React.Component {





render() {
  return(

    <div id= "main">

        <div id="body">


          <h2 className="welcome">{`Welcome ${this.props.name}!`}</h2>


          <img src={localStorage.getItem('selfie')} id="picture" />



        </div>

    </div>
    )
  }
}



export default Main;
