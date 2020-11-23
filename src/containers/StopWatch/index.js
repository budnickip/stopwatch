import { useEffect, useState } from "react"

function StopWatch() {
    const [startTime, setStartTime] = useState(0)
    const [running, setRunning] = useState(false)
    const [paused, setPaused] = useState(true)
    const [endTime, setEndTime] = useState(0)
    const [stoper, setStoper] = useState(0)
    const [name, setName] = useState(paused ? " far fa-play-circle" : "far fa-pause-circle")
    const [hoveredStart, setHoveredStart] = useState(false)
  //  const [displayer, setDisplayer] = useState("00:00:00");


    const handleStart = () =>{
        if(!running){
            setStartTime(performance.now())
        }
        setRunning(true)
        setPaused(!paused)
    }

    const resetTime = () =>{
        setRunning(false)
        setPaused(true)
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
             milliseconds = parseInt(((stoper/10)%100))
             seconds = parseInt((stoper/1000)%60)
             minutes = parseInt((stoper/(1000*60))%60)
             hours = parseInt((stoper/(1000*60*60))%24);
        
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        
        }else{
            milliseconds = "00"
            seconds = "00"
            minutes = "00"
            hours = "00"
        }

        return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

    }

    const enterName = () =>{
        setHoveredStart(true)
      }
    
      const leaveName = () =>{
        setHoveredStart(false)
      }
    
      useEffect(()=>{
        hoveredStart ? setName(paused ? "fas fa-play-circle" : "fas fa-pause-circle") : setName(paused ? " far fa-play-circle" : "far fa-pause-circle")
      },[hoveredStart,paused])
    return(
        <div className="stopwatch">
            <div className="stopwatch__header">
                 <h1>Stoper</h1>
            </div>
            <div className="time">{displayer()}</div>
            <i id="start_stop" onClick={handleStart} onMouseEnter={enterName} onMouseLeave={leaveName} className={`icon ${name}`} />
            <i id="reset" onClick={resetTime} class="fas icon reset-icon fa-sync"></i>
        </div>
    )
}

export default StopWatch