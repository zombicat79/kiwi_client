const TimeInfo = (props) => {
    const time = [new Date().getHours(), new Date().getMinutes()];
    
    return (
        <div className="screen-layout">
            {props.text.length === 0 && <p>{`<`}</p>}
            {props.text.length === 0 && time[1] >= 10 && <p className="screen-text">{`${time[0]}:${time[1]}`}</p>}
            {props.text.length === 0 && time[1] < 10 && <p className="screen-text">{`${time[0]}:0${time[1]}`}</p>}
            {props.text.length === 0 && <p>{`>`}</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
        </div>
    )
}

export default TimeInfo;