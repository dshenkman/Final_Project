import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'
import './navbar.css'
import Customize from '../Customize/Customize'
import Games from '../Games/Games'
import ToggleSignOut from '../ToggleSignOut/ToggleSignOut'
import Signin from '../Signin/Signin'

import Main from '../Main/Main'
import Favorites from '../Favorites/Favorites'
import game1pic from '../Games/Game1/game1.png'
import game2pic from '../Games/Game2/game2.png'
import game3pic from '../Games/Game3/game3.png'
import game4pic from '../Games/Game4/game4.png'
import game5pic from '../Games/Game5/game5.png'
import game6pic from '../Games/Game6/game6.png'

import Logo from '../Logo/Logo'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'


console.log({game1pic});



 class NavBar extends React.Component {
   constructor() {
     super();
     this.state = {
       games:  [
         {
           "id": 1,
           "name": "Tic-Tac-Toe",
           "image": game1pic ,
           "link": "/game1"
         },
         {
           "id": 2,
           "name": "Food Flip",
           "image": game2pic,
           "link": "/game2"
         },
         {
           "id": 3,
           "name": "Superhero Memory Buster",
           "image": game3pic,
           "link": "/game3"
         },
         {
           "id": 4,
           "name": "Ice Cream Match",
           "image": game4pic,
           "link": "/game4"
         },
         {
           "id": 5,
           "name": "Sliding Puzzle",
           "image": game5pic,
           "link": "/game5"
         },{
           "id": 6,
           "name": "Math Facts",
           "image": game6pic,
           "link": "/game6"
         }
       ],
       favorites: [],

     }
   }




   addFavorite = (favorite) => {
     const {favorites} = this.state;

     if (!favorites.some(alreadyFavorite => alreadyFavorite.id === favorite.id)) {
       this.setState({
         favorites: [...this.state.favorites, favorite]
       });

     }
   };


   removeFavorite = (favorite) => {
     const {favorites} = this.state;

     const remove = favorites.filter(
       (game) => game.id !== favorite.id
     )

     this.setState({
       favorites: remove
     });
   };



   render() {
     const name = this.props.name
  return (


        <Router>





        <Navbar className="pa3 pa4-ns h6 ">


        <ul className="links">


        <Link to="/Main" className="no-underline">
        <Logo className="link dim black b f1 f5-ns dib mr3"  />
        </Link>


          <Nav id="navlinks">
              <li className="f2 dim dib mr6  grow">
              <Link to="/Games" className="no-underline">Games</Link>
              </li>
              <li className="f2 dim dib mr6  grow">
              <Link to="/Favorites" className="no-underline">Favorites</Link>
              </li>
              <li className=" f2 dim  mr6  grow">
              <Link to="/Customize" className="no-underline">Fun Stuff</Link>
              </li>

          </Nav>






        </ul>

        </Navbar>




              <Switch>

              <Route  path= '/Main'>
              <div className = "">
                <Main name={this.props.name}    />
                </div>
              </Route>



                  <Route  path= '/Games'
                  exact render={() =>
                    (
                      <div className = 'container-fluid'>

                      <Games games={this.state.games} handleFavorites={this.favoriteGame} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite} />
                      </div>

                    )}/>

                  <Route  path= '/Favorites'>
                  <div className = "">
                    <Favorites favorites={this.state.favorites}   />
                    </div>
                  </Route>

                  <Route  path= '/Customize'>
                   <Customize />
                  </Route>



                  <Route  path= '/signin'>
                   <Signin />
                  </Route>


               </Switch>

          </Router>









    );
  }
}

export default NavBar


//
//
//    componentDidMount() {
//     this.updateFavoritesInStorage()
//
//     window.addEventListener(
//       "beforeunload",
//       this.saveToLocalStorage.bind(this)
//     );
// }
//
//   componentWillUnmount() {
//       window.removeEventListener(
//         "beforeunload",
//         this.saveToLocalStorage.bind(this)
//       );
//
//       this.saveToLocalStorage();
//    }


//
//  updateFavoritesInStorage() {
//    for (let key in this.state) {
//    if (localStorage.hasOwnProperty(key)) {
//      let value = localStorage.getItem(key);
//
//      try {
//        value = JSON.parse(value);
//        this.setState({ [key]: value });
//      } catch (e) {
//        this.setState({ [key]: value });
//      }
//    }
//  }
//  }
//
//
//
//
//
//
//   saveToLocalStorage() {
//     for (let key in this.state) {
//       localStorage.setItem(key, JSON.stringify(this.state[key]));
//     }
//   }
//
//   updateInput(key, value) {
//   this.setState({ [key]: value });
// }
