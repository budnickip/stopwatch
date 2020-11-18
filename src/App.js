import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timer, setTimer] = useState(sessionLength*60)
  const [breakTime, setBreakTime] = useState(breakLength*60)
  const [start, setStart] = useState(false)


  const showTime = () =>{
    let minutes = Math.floor(timer/60);
    let seconds = timer - minutes * 60;
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return minutes + ':' + seconds;
  } 

  const reset = () =>{
    setBreakLength(5)
    setSessionLength(25)
    setTimer(sessionLength*60)
  }


  const breakDecrement = () =>{
    if(breakLength > 1){
      setBreakLength(breakLength-1)
    }
  }

  const breakIncrement = () =>{
    if(breakLength < 60){
      setBreakLength(breakLength+1)
    }
  }


  const sessionDecrement = () => {
    if(sessionLength > 1){
      setSessionLength(sessionLength-1)
    }
    //setTimer(sessionLength*60)
  }

  const sessionIncrement = () =>{
    if(sessionLength < 60){
      setSessionLength(sessionLength+1)
    }
    //setTimer(sessionLength*60) z useState
  }

    //useState jest asynchroniczne, dlatego jest konieczność użycia useEffect, w innym przypadku
    //wynik byłby aktualizowany dopiero w kolejnym ruchu!
    // po dodaniu dependency array(drugi argument useEffect), useEffect będzie wywoływane tylko
    // w momencie w którym sessionLength zostanie zaktualizowany!
  useEffect(()=>{
      setTimer(sessionLength*60)
  }, [sessionLength])

  const handleStart = () => {
    setStart(!start)
  }

  useEffect(() => {
    if(start){
      const interval = setInterval(() => {
       // setTimer(timer => timer - 1);
        if(timer>0){
          setTimer(timer => timer - 1);
        }else{
          clearInterval(interval)
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [start, timer]);

  return (
    <div className="App">
      <div id="break-label">
        <p>Break Length</p>
        <button id="break-decrement" onClick={breakDecrement}>-</button>
        <p id="break-length">{breakLength}</p>
        <button id="break-increment" onClick={breakIncrement}>+</button>
      </div>
      <div id="session-label">
        <p>Session Length</p>
        <button id="session-decrement" onClick={sessionDecrement}>-</button>
        <p id="session-length">{sessionLength}</p>
        <button id="session-increment" onClick={sessionIncrement}>+</button>
      </div>
      <div className="timer">
        <div id="timer-label">
          <p>{timer>0 ? 'Session' : 'Break'}</p>
        </div>
        <div id="time-left">
            {showTime()}
        </div>
        <button id="start_stop" onClick={handleStart}>Start_Stop</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>

    </div>
  );
}

export default App;
