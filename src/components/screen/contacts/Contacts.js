const Contacts = (props) => {
    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            {props.text.length === 0 && <p className="screen-text">See contacts</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
            <p>{`>`}</p>
        </div>
    )
}

export default Contacts;