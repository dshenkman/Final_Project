import React from 'react';
import Tilt from 'react-tilt'
import './Logo/logo.css'
import game from './Logo/game-icon.png'
import {BrowserRouter as Router,
        Route,
        Switch,
         Link,
} from 'react-router-dom'
// import './Home/home.css'
import Customize from './Customize/Customize'
import Favorites from './Favorites/Favorites'
import Games from './Games/Games'
import Main from './Main/Main'
import Logo from './Logo/Logo'
// import './Nav.css'
import 'tachyons'

const Nav = ({ onRouteChange }) => {
      return (
        <nav className="pa3 pa4-ns">
          <a className="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Logo</a>
          <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Home</a>
          <a className="link dim gray    f6 f5-ns dib mr3" href="#Games">Games</a>
          <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Favorites</a>
          <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">Customize</a>
          <a onClick={() => onRouteChange('signout')} class="link dim gray f6 f5-ns dib">
            Sign Out
          </a>

        </nav>








      );

}

export default Nav;

            //
            //
            //
            //
            //
            // <Router>
            //
            // <div>
            //
            //
            //
            //
            //
            // <ul className="links">
            //   <li className=" dim purple grow">
            //   <Link to="/Main" className="no-underline">Home</Link>
            //   </li>
            //   <li className=" dim purple grow">
            //   <Link to="/Games" className="no-underline">Games</Link>
            //   </li>
            //   <li className=" dim purple grow">
            //   <Link to="/Favorites" className="no-underline">Favorites</Link>
            //   </li>
            //   <li className=" dim purple grow">
            //   <Link to="/Customize" className="no-underline">Customize</Link>
            //   </li>
            // </ul>
            //
            //
            //
            //
            //       <Switch>
            //
            //
            //
            //           <Route  path= '/Games'>
            //              <Games />
            //           </Route>
            //
            //           <Route  path= '/Favorites'>
            //             <Favorites />
            //           </Route>
            //
            //           <Route  path= '/Customize'>
            //            <Customize />
            //           </Route>
            //
            //           <Route  path= '/Main'>
            //            <Main />
            //           </Route>
            //
            //
            //        </Switch>
            //     </div>
            //
            //   </Router>
