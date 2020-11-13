import { useState } from 'react';
import './App.scss';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timer, setTimer] = useState(sessionLength*60)

  const showTime = () =>{
    let minutes = Math.floor(timer/60);
    let seconds = timer - minutes * 60;
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return minutes + ':' + seconds;
  }
  return (
    <div className="App">
      <div id="break-label">
        <p>Break Length</p>
        <button id="break-decrement">-</button>
        <p id="break-length">{breakLength}</p>
        <button id="break-increment">+</button>
      </div>
      <div id="session-label">
        <p>Session Length</p>
        <button id="session-decrement">-</button>
        <p id="session-length">{sessionLength}</p>
        <button id="session-increment">+</button>
      </div>
      <div className="timer">
        <div id="timer-label">
          <p>Session</p>
        </div>
        <div id="time-left">
            {showTime()}
        </div>
        <button id="start_stop">Start_Stop</button>
        <button id="reset">reset</button>
      </div>

    </div>
  );
}

export default App;
