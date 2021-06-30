import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Game1 from './Game1/Game1'
import Game2 from './Game2/Game2'
import Game3 from './Game3/Game3'
import Game4 from './Game4/Game4'
import Game5 from './Game5/Game5'
import Game6 from './Game6/Game6'


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
      },
      fill: ''
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

    make() {
      this.setState({
        fill: 'yellow'
      })
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




      {this.props.games.map(game => {
        return(
          <div
                  className = 'image-container'
                  key = {game.id}
                  style= {divStyle}
                  >
                  <Link to={game.link}>
                    <img
                    id="pic"
                    src = {game.image}
                    onClick = {() => this.handleClick()}
                     />


                  </Link>
                  <p className = "caption" >{game.name} </p>


              <button id="favbutton" onClick={() => this.props.addFavorite(game)}>
              <svg id = "star" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          </button>


              <button id="favbutton"
              onClick={() => this.props.removeFavorite(game)}
              >

              <svg id = "star" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#008099" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
            </button>





              </div>



        )





      })}

















              <Route exact path="/game1">
                <Game1 />
              </Route>
              <Route exact path="/game2">
                <Game2 />
              </Route>
              <Route exact path="/game3">
                <Game3 />
              </Route>
              <Route exact path="/game4">
                <Game4 />
              </Route>
              <Route exact path="/game5">
                <Game5 />
              </Route><Route exact path="/game6">
                <Game6 />
              </Route>


              <Link to = "/">

              <button
              style = {{display: this.state.button.display}}
              className= "button"
              onClick = {() => this.handleBack()}
              >Choose Another Game</button>

              </Link>








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
