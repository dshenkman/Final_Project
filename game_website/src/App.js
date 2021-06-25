import './App.css';
import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Nav from './components/Nav'
import Favorites from './components/Favorites/Favorites'
import Logo from './components/Logo/Logo'
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'





class App extends React.Component{
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
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
    const { route } = this.state;
      if (route === 'mainpage') {
        return (
        <nav className = 'pa3 pa4-ns'>
          <Home className="link dim black b f6 f5-ns dib mr3" onRouteChange={this.onRouteChange} />
          <Navigation className="dim purple grow" onRouteChange={this.onRouteChange} />
        </nav>


      )
      } else {
        return (
          <div className = "signin">
            <h1 id= "title">KidsGames.com</h1>
            <div className = "forms">
              <Signin onRouteChange={this.onRouteChange}/>
              <Register onRouteChange={this.onRouteChange}/>
            </div>
        </div>
      )

      }
    }

}
export default App;
