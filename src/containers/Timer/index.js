import { useEffect, useState } from 'react';
import SettingsComp from '../../components/SettingsComp'
import Session from '../../components/Session'

function Timer() {
    const [breakLength, setBreakLength] = useState(5)
    const [sessionLength, setSessionLength] = useState(25)
    const [timer, setTimer] = useState(sessionLength*60)
    const [breakTime, setBreakTime] = useState(false)
    const [start, setStart] = useState(false)
    const [name, setName] = useState(start ? "far fa-pause-circle" : " far fa-play-circle")
    const [hoveredStart, setHoveredStart] = useState(false)
  
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
      setStart(false)
      setBreakTime(false)
      var audio = document.getElementById("beep")
      audio.pause();
      audio.currentTime = 0;
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
  
    const handleBreak = () =>{
      setBreakTime(!breakTime)
    }
  
    useEffect(() => {
      if(start){
        const interval = setInterval(() => {
         // setTimer(timer => timer - 1);
          if(timer>0){
            setTimer(timer => timer - 1);
          }else{
            handleBreak()
          /*  if(breakTime){
              setTimer(breakLength*60)
            }else{
              setTimer(sessionLength*60)
            } */
            clearInterval(interval)
          }
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [start, timer, breakTime]);
  
    useEffect(()=>{
      if(breakTime){
        setTimer(breakLength*60)
      }else{
        setTimer(sessionLength*60)
      }
    }, [breakTime])
  
    useEffect(()=>{
      if(timer === 0){
        var audio = document.getElementById("beep")
        audio.play()
      }
    }, [timer])
  
  
    const enterName = () =>{
      setHoveredStart(true)
    }
  
    const leaveName = () =>{
      setHoveredStart(false)
    }
  
    useEffect(()=>{
      hoveredStart ? setName(start ? "fas fa-pause-circle" : "fas fa-play-circle") : setName(start ? "far fa-pause-circle" : " far fa-play-circle")
    },[hoveredStart,start])
    
    return (
      <div className="timer-app">
        <div className="timer-header">
          <h1 className="timer-header__header">Timer</h1>
        </div>
        <SettingsComp breakLength={breakLength} sessionLength={sessionLength} breakIncrement={breakIncrement} breakDecrement={breakDecrement} sessionDecrement={sessionDecrement} sessionIncrement={sessionIncrement} />
        <Session breakTime={breakTime} showTime={showTime} handleStart={handleStart} enterName={enterName} leaveName={leaveName} name={name} reset={reset}/> 
      </div>
    );
  }
  
  export default Timer;
  