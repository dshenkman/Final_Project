import React from 'react';
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'
import './home.css'
import Customize from '../Customize/Customize'
import Favorites from '../Favorites/Favorites'
import Games from '../Games/Games'
import Main from '../Main/Main'



const Home = () => {

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



              <Route  path= '/Games'>
                 <Games />
              </Route>

              <Route  path= '/Favorites'>
                <Favorites />
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

export default Home
