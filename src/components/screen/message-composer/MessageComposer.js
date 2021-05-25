const MessageComposer = (props) => {
    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            <p className="screen-text">{props.text}</p>
            <p>{`>`}</p>
        </div>
    )
}

export default MessageComposer;