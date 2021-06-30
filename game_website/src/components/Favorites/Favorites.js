import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Game1 from '../Games/Game1/Game1'
import Game2 from '../Games/Game2/Game2'



class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameLink: {
          display: 'block'
    },
      button: {
        display: 'none'
      }
      }

  }



   handleClick() {
     this.setState({
       gameLink: {
           display: 'none'
     },
       button: {
         display: 'block'
       }
       })

  }

  handleBack() {
    this.setState({
      gameLink: {
          display: 'block'
    },
      button: {
        display: 'none'
      }
      })

  }
    render(props) {
      const {favorites} = this.props;
      return (
        <Router>



              <div>

              {favorites.map(game => {
                return(
                  <div key = {game.id} >

                  <Link to={game.link}>
                    <img id="pic" src = {game.image} />
                    <p className = "caption" >{game.name} </p>
                  </Link>

              






                  </div>

                )


              })}


              </div>

              <Route exact path="/game1">
                <Game1 />
              </Route>
              <Route exact path="/game2">
                <Game2 />
              </Route>


              <Link to = "/">

              <button
              style = {{display: this.state.button.display}}
              className= "button"
              onClick = {() => this.handleBack()}
              >Choose Another Game</button>

              </Link>

              </Router>


      )

    }



}



export default Favorites
