import { useState } from 'react';
import './App.scss';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
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
    </div>
  );
}

export default App;
