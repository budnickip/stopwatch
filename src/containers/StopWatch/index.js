import { useEffect, useState } from "react"

function StopWatch() {
    const [startTime, setStartTime] = useState(0)
    const [running, setRunning] = useState(false)
    const [endTime, setEndTime] = useState(0)
    const [stoper, setStoper] = useState("00:00:00")

    const measureTime = () =>{
        setStartTime(performance.now())
        setRunning(true)
    }
    const stopTime = () =>{
        setEndTime(performance.now())
        setRunning(false)
    }
    const resetTime = () =>{
        setRunning(false)
        setStoper("00:00:00")
    }

    useEffect(()=>{
        const intervalStoper = setInterval(() => {
             if(running){
                setStoper(Math.round(performance.now()-startTime))
             }else{
             //  handleBreak()
               clearInterval(intervalStoper)
             }
           }, 10);
           return () => clearInterval(intervalStoper);
         })
    return(
        <div className="stopwatch">
            <h1 className="stopwatch__header">Stoper</h1>
            <div className="time">{stoper}</div>
            <button onClick={measureTime}>Start</button>
            <button onClick={stopTime}>Stop</button>
            <button onClick={resetTime}>Reset</button>
        </div>
    )
}

export default StopWatch