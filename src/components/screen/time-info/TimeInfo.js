const TimeInfo = () => {
    const time = [new Date().getHours(), new Date().getMinutes()];
    
    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            {time[1] >= 10 && <p className="screen-text">{`${time[0]}:${time[1]}`}</p>}
            {time[1] < 10 && <p className="screen-text">{`${time[0]}:0${time[1]}`}</p>}
            <p>{`>`}</p>
        </div>
    )
}

export default TimeInfo;