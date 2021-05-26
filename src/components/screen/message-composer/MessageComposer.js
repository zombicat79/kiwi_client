const MessageComposer = (props) => {
    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            {props.text.length === 0 && <p className="screen-text">WRITE SMS</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
            <p>{`>`}</p>
        </div>
    )
}

export default MessageComposer;