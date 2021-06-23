import './App.css';
import React from 'react'
import Navigation from './components/Navigation/Navigation'
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
    } else if (route === 'main') {
      this.setState({isSignedIn:true})
    }
      this.setState({route: route});
  }

  render() {
    const { route } = this.state;
      if (route === 'main') {
        return (
          <div className="App">
              <Navigation onRouteChange={this.onRouteChange} />
              <Logo />
              <Home />
          </div> )
      } else {
        return (
          <div className="App">
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
