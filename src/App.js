import './App.scss';
import React from "react"
import Timer from './containers/Timer'
import StopWatch from './containers/StopWatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*na github pages oraz przy odpalaniu aplikacji domyślną ścieżką jest nazwa folderu stopwatch, czyli
      link/stopwatch - dodając basename stopwatch, jak kliknę na stoper to będzie ścieżka stopwatch/stoper, a jak nie kliknę to otworzy
      się Timer. */}
        <Router basename="/stopwatch">
          <div className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">Timer</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/stoper">Stoper</Link>
            </li>
          </ul>
          <Switch>
            <Route exact={true} path="/">
              <Timer />
            </Route>
            <Route path="/stoper">
              <StopWatch />
            </Route>
          </Switch>
          </div>
        </Router>
      
    </div>
  );
}


export default App;