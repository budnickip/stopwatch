import './App.scss';
import React from "react"
import Timer from './containers/Timer'
//import StopWatch from './containers/StopWatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/timer">Timer</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/stoper">Stoper</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/stoper">
              <StopWatch />
            </Route>
            <Route path="/">
              <Timer />
            </Route>
          </Switch>
          </div>
        </Router>
      
    </div>
  );
}

function StopWatch() {
  return(
      <div className="stop-watch">
          Tutaj będzie stoper
      </div>
  )
}

export default App;