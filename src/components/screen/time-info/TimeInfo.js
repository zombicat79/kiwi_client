const TimeInfo = () => {
    const time = [new Date().getHours(), new Date().getMinutes()];
    
    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            <p className="screen-text">{`${time[0]}:${time[1]}`}</p>
            <p>{`>`}</p>
        </div>
    )
}

export default TimeInfo;