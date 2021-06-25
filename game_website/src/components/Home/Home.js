import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'
import './home.css'
import Customize from '../Customize/Customize'
import Games from '../Games/Games'
import Main from '../Main/Main'
import Favorites from '../Favorites/Favorites'
import game1pic from '../Games/Game1/game1.jpeg'
import game2pic from '../Games/Game2/game2.jpeg'

console.log({game1pic});



 class Home extends React.Component {
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

     if (!favorites.some(alreadyFavorite => alreadyFavorite.id == favorite.id)) {
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


        <nav>



        <ul className="links">
          <li className=" dim purple grow">
          <Link to="/Main" className="no-underline">Home</Link>
          </li>
          <li className=" dim purple grow">
          <Link to="/Games" className="no-underline">Games</Link>
          </li>
          <li className=" dim purple grow">
          <Link to="/Favorites" className="no-underline">Favorites</Link>
          </li>
          <li className=" dim purple grow">
          <Link to="/Customize" className="no-underline">Customize</Link>
          </li>

        </ul>

          </nav>



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

                  <Route  path= '/Main'>
                   <Main />
                  </Route>


               </Switch>
            </div>

          </Router>





     </div>




    );
  }
}

export default Home
