const Main = (props) => {
    const time = new Date().getHours();
    
    return (
        <div className="screen-layout">
            {props.text.length === 0 && <p>{`<`}</p>}
            {props.text.length === 0 && time >= 5 && time < 12 && <p className="screen-text">Hi there! Good morning!</p>}
            {props.text.length === 0 && time >= 12 && time < 18 && <p className="screen-text">Hi there! Good afternoon!</p>}
            {props.text.length === 0 && (time >= 18 || time < 5) && <p className="screen-text">Hi there! Good evening!</p>}
            {props.text.length === 0 && <p>{`>`}</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
        </div>
    )
}

export default Main;