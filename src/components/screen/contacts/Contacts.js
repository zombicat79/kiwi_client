const Contacts = (props) => {
    return (
        <div className="screen-layout">
            <p>{`<`}</p>
            {props.text.length === 0 && <p className="screen-text">SEE CONTACTS</p>}
            {props.text.length > 0 && <p className="screen-text">{props.text}</p>}
            <p>{`>`}</p>
        </div>
    )
}

export default Contacts;