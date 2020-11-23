import { useEffect, useState } from "react"

function StopWatch() {
    const [startTime, setStartTime] = useState(0)
    const [running, setRunning] = useState(false)
    const [paused, setPaused] = useState(false)
    const [endTime, setEndTime] = useState(0)
    const [stoper, setStoper] = useState(0)
  //  const [displayer, setDisplayer] = useState("00:00:00");

    const measureTime = () =>{
        if(!running){
            setStartTime(performance.now())
        }
        setRunning(true)
        setPaused(false)
    }
    const stopTime = () =>{
        setEndTime(performance.now())
        setPaused(true)
    }
    const resetTime = () =>{
        setRunning(false)
        setStoper("00:00:00")
    }

    useEffect(()=>{
        const intervalStoper = setInterval(() => {
             if(running && !paused){
                setStoper(Math.round(performance.now()-startTime))
             }else{
             //  handleBreak()
               clearInterval(intervalStoper)
             }
           }, 10);
           return () => clearInterval(intervalStoper);
         })

    const displayer = () =>{

        var milliseconds, seconds, minutes, hours
        if(running){
             milliseconds = parseInt((stoper%1000))
             seconds = parseInt((stoper/1000)%60)
             minutes = parseInt((stoper/(1000*60))%60)
             hours = parseInt((stoper/(1000*60*60))%24);
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        
        }else{
            milliseconds = "00"
            seconds = "00"
            minutes = "00"
            hours = "00"
        }

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;

    }
    return(
        <div className="stopwatch">
            <h1 className="stopwatch__header">Stoper</h1>
            <div className="time">{displayer()}</div>
            <button onClick={measureTime}>Start</button>
            <button onClick={stopTime}>Stop</button>
            <button onClick={resetTime}>Reset</button>
        </div>
    )
}

export default StopWatch