import './App.css';
import React from 'react'
import ToggleSignOut from './components/ToggleSignOut/ToggleSignOut'
import Favorites from './components/Favorites/Favorites'
import Logo from './components/Logo/Logo'
import NavBar from './components/NavBar/NavBar'
import Signin from './components/Signin/Signin'
import Main from './components/Main/Main'
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'

import Register from './components/Register/Register'





class App extends React.Component{
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
       id: '',
       name: '',
       joined: ''
     }
    }
  }

  loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }})
}

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'mainpage') {
      this.setState({isSignedIn:true})
    }
      this.setState({route: route});
  }

  render() {

    const { route , isSignedIn } = this.state;

      if (route === 'home') {
        return (
          <Router>

        <nav >
        <ToggleSignOut onRouteChange={this.onRouteChange} />
        <Main name={this.state.user.name} />
        <NavBar onRouteChange={this.onRouteChange} />



        </nav>
        </Router>



      )
      } else {
        return (
          <div className = "signin">
            <h1 id= "title">KidsGames.com</h1>
            <div className = "forms">
              <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>
        </div>
      )

      }

    }

}
export default App;
