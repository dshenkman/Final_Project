import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game1 from './Game1/Game1'
import Game2 from './Game2/Game2'

import './Games.css'

export default function Games() {
  return (
    <Router>
      <div>
        <nav>
          <ul className = "gamelist">

            <li>
              <Link to="/game1">Tic-Tac-Toe</Link>
            </li>

            <li>
              <Link to="/game2">Matching Game</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game1">
            <Game1 />
          </Route>
          <Route path="/game2">
            <Game2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
