import React from 'react';
import Logo from '../Logo/Logo'
import Customize from '../Customize/Customize'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setImage} from '../../redux/actions'
import './main.css'


const Main = ({name}) => {



  return(
    <div>

      <h1 className="welcome">{`Welcome ${name}!`}</h1>


    </div>
    )

}



export default Main;
