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
          <div>
          <Link to="/timer">Timer</Link>
          <Link to="/stoper">Stoper</Link>
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