import { useState} from 'react';

const keymap = [
    {id: "1L", num: 1, letters: "SELECT"}, 
    {id: "1C", num: 2, letters: "abc"}, 
    {id: "1R", num: 3, letters: "def"}, 
    {id: "2L", num: 4, letters: "ghi"}, 
    {id: "2C", num: 5, letters: "jkl"}, 
    {id: "2R", num: 6, letters: "mno"}, 
    {id: "3L", num: 7, letters: "pqrs"}, 
    {id: "3C", num: 8, letters: "tuv"}, 
    {id: "3R", num: 9, letters: "wxyz"},
    {id: "4L", num: "<", letters: ""},
    {id: "4C", num: 0, letters: "BACK"},
    {id: "4R", num: ">", letters: ""}
]

let pressedButtons = {};
for (const button of keymap) {
    pressedButtons[button.id] = false;
}    

const Keyboard = (props) => {
    const [buttonState, setButtonState] = useState(pressedButtons);
    
    function handleButtonPressing(buttonId) {
        setButtonState({...buttonState, [buttonId]: !buttonState[buttonId]});
    }

    function removeButtonPressing(buttonId) {
        setTimeout(() => {
            setButtonState({...buttonState, [buttonId]: !buttonState[buttonId]})
        }, 500)
    }

    function handleClicks(button) {
        const screens = ["main", "contacts", "message", "date", "time"]
        if (props.phoneStatus === "on") {
            switch(true) {
                case button.id === "1L":
                    handleButtonPressing(button.id);
                    if (props.activeScreen === "contacts") {
                        props.innerScreenChange("David");
                    }
                    else if (props.activeScreen === "David") {
                        props.innerScreenChange("specialcall");
                    }
                    else if (props.activeScreen === "message") {
                        props.innerScreenChange("typing");
                    }
                    else if (props.activeScreen === "typing") {
                        console.log(1);
                    }
                    else {
                        props.handleInput(button.num);
                    }
                    break;
                case button.id === "4L":
                    handleButtonPressing(button.id);
                    if (screens.includes(props.activeScreen)) {
                        props.screenChange("left");
                    }
                    else if (props.activeScreen === "typing" || props.activeScreen === "dialling") {
                        props.inputGoBack();
                    }
                    break;
                case button.id === "4C":
                    handleButtonPressing(button.id);
                    if (props.activeScreen === "specialcall") {
                        props.innerScreenChange("David");
                    }
                    else if (props.activeScreen === "David") {
                        props.innerScreenChange("contacts");
                    }
                    else if (props.activeScreen === "typing") {
                        props.innerScreenChange("message");
                    }
                    else if (props.activeScreen === "oncall") {
                        props.innerScreenChange(screens[0]);
                    }
                    else {
                        props.handleInput(button.num); 
                    }
                    break;
                case button.id === "4R":
                    handleButtonPressing(button.id);
                    if (screens.includes(props.activeScreen)) {
                        props.screenChange("right");
                    }
                    else if (props.activeScreen === "dialling") {
                        props.innerScreenChange("oncall")
                    }
                    /* else if (props.activeScreen === "typing") {
                        props.addSpacing();
                    }*/
                    break;
                default:
                    props.handleInput(button.num);
                    handleButtonPressing(button.id);
            }
        }
    }

    return (
        <div id="keyboard-container">
            {keymap.map((el) => {
                return (
                    <div key={el.id}>
                        <button 
                            className="phone-buttons" 
                            style={buttonState[el.id] === false 
                                ? { backgroundColor: "lightgrey" } 
                                : { backgroundColor: "grey", border: "2px solid yellow" }} 
                            onClick={() => {
                                handleClicks(el);
                        }}>
                            {buttonState[el.id] === true 
                                ? removeButtonPressing(el.id) 
                                : null}
                            <h2>{el.num}</h2>
                            <p>{el.letters}</p>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Keyboard;