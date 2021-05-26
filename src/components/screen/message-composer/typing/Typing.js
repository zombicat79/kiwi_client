const Typing = (props) => {
    return (
        <div className="screen-layout">
            {props.text.length === 0 && <p className="screen-text">Please type...</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
        </div>
    )
}

export default Typing;