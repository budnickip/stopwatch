function Settings(props) {
    return(
        <div className="settings">
          <div id="break-label" className="break-label">
            <p class="break-label__paragraph">Break Length</p>
            <button id="break-decrement" className="btn" onClick={props.breakDecrement}>-</button>
            <p>{props.breakLength}</p>
            <button id="break-increment" className="btn" onClick={props.breakIncrement}>+</button>
          </div>
          <div id="session-label" className="session-label">
            <p class="session-label__paragraph">Session Length</p>
            <button className="btn" id="session-decrement" onClick={props.sessionDecrement}>-</button>
            <p>{props.sessionLength}</p>
            <button className="btn" id="session-increment" onClick={props.sessionIncrement}>+</button>
          </div>
        </div>
    )
}

export default Settings