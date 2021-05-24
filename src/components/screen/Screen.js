const Screen = (props) => {
    return (
        <div id="screen">
            {props.phoneStatus === "on" && <p>{props.text}</p>}
        </div>
    )
}

export default Screen;