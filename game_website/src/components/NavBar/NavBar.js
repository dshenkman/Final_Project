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
import game1pic from '../Games/Game1/game1.jpeg'
import game2pic from '../Games/Game2/game2.jpeg'
import Logo from '../Logo/Logo'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'


console.log({game1pic});



 class NavBar extends React.Component {
   constructor() {
     super();
     this.state = {
       list:  [
         {
           "id": 1,
           "name": "Tic-Tac-Toe",
           "image": game1pic ,
           "link": "/game1"
         },
         {
           "id": 2,
           "name": "Matching",
           "image": game2pic,
           "link": "/game2"
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
   render() {
  return (

        <div>

        <Router>



        <div>


        <Navbar className="pa3 pa4-ns h6 ">

        <ul className="links">


          <Link to="/Main" className="no-underline">
          <Logo className="link dim black b f1 f5-ns dib mr3"  />
          </Link>

          <Nav id="navlinks">
              <li className="f2 dim dib mr5 purple grow">
              <Link to="/Games" className="no-underline">Games</Link>
              </li>
              <li className="f2 dim dib mr5 purple grow">
              <Link to="/Favorites" className="no-underline">Favorites</Link>
              </li>
              <li className=" f2 dim  mr5 purple grow">
              <Link to="/Customize" className="no-underline">Customize</Link>
              </li>

          </Nav>






        </ul>

        </Navbar>




              <Switch>



                  <Route  path= '/Games'
                  exact render={() =>
                    (
                      <Games list={this.state.list} addFavorite={this.addFavorite} />

                    )}/>

                  <Route  path= '/Favorites'>
                    <Favorites favorites={this.state.favorites}  />
                  </Route>

                  <Route  path= '/Customize'>
                   <Customize />
                  </Route>

                

                  <Route  path= '/signin'>
                   <Signin />
                  </Route>


               </Switch>
            </div>

          </Router>





     </div>




    );
  }
}

export default NavBar
