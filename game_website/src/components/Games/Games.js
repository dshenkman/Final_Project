import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Game1 from './Game1/Game1'
import Game2 from './Game2/Game2'
import './Games.css'
import game1pic from './Game1/game1.jpeg'
import game2pic from './Game2/game2.jpeg'

import Favorites from '../Favorites/Favorites'



class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameLink: {
          display: 'inline'
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

  toggleFav() {
   alert('fav')
 }

  render(props) {
    const styles = {
      divStyle: {
        display: this.state.gameLink.display,
      }
    }
    const {divStyle} = styles

  return (
    <Router>
      <div >




      {this.props.games.map(game => {
        return(
          <div className = 'image-container d-flex flex-wrap justify-content-around m-3'>
          <div
                key = {game.id}
                style= {divStyle}
                onClick = {() => this.handleClick()}>
                <Link to={game.link}>
                  <img id="pic" src = {game.image} />
                  <p className = "caption" >{game.name} </p>
                </Link>

              <button onClick={() => this.props.addFavorite(game)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
              </button>


              <button onClick={() => this.props.removeFavorite(game)}>

              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16"
                  fill="currentColor"
                  class="bi bi-file-x"
                  viewBox="0 0 16 16">
              <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>



              </div>

              </div>


        )





      })}

















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








      </div>
    </Router>
  );
}

}

export default Games


// <div id = "gameChoices">
//     <div
//       className = 'gameLink'
//       style= {divStyle}
//       onClick = {() => this.handleClick()}>
//       <Link to="/game1">
//         <img src = {game1pic} />
//         <p className = "caption" >Tic-Tac-Toe </p>
//       </Link>
//       <button onClick={() => this.props.addFavorite()}>
//       Add to Favorites
//      </button>
//
//     </div>
//
//
//     <div
//       className = 'gameLink'
//       style= {divStyle}
//       onClick = {() => this.handleClick()}>
//       <Link to="/game2">
//         <img src = {game2pic} />
//         <p className = "caption"> Matching Game</p>
//         <button onClick = {() => this.toggleFav()}>Favorites</button>
//         <Favorites />
//       </Link>
//     </div>
//
//   </div>
