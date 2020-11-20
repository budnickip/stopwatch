function Session(props) {
    return(
        <div className="session">
            <div id="timer-label" className="timer-label">
            <p className="timer-label__paragraph">{props.breakTime ? 'Break' : 'Session'}</p>
            </div>
            <div id="time-left" className="time-left">
                {props.showTime()}
            </div>
            <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/> 
            <i id="start_stop" onClick={props.handleStart} onMouseEnter={props.enterName} onMouseLeave={props.leaveName} className={`icon ${props.name}`} />
            <i id="reset" onClick={props.reset} class="fas icon reset-icon fa-sync"></i>
        </div>
    )
}

export default Session