import { useState} from 'react';
import axios from 'axios';

import buttonTap from './../../sounds/button-tapping.wav';
import phoneCall from './../../sounds/phone-call.wav';

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

    function makeCall() {
        const call = document.querySelector('#phone-call');
        call.play();
    }

    function hangUp() {
        const call = document.querySelector('#phone-call');
        call.pause();
    }

    function buttonTapping() {
        const tap = document.querySelector('#button-sound');
        tap.play();
    }

    function handleClicks(button) {
        const screens = ["main", "contacts", "message", "date", "time"]
        if (props.phoneStatus === "on") {
            if (props.keyboardInput.includes(">")) {
                props.inputGoBack();
            }
            switch(true) {
                case button.id === "1L":
                    handleButtonPressing(button.id);
                    if (props.activeScreen === "contacts") {
                        props.innerScreenChange("David");
                        buttonTapping();
                    }
                    else if (props.activeScreen === "David") {
                        props.innerScreenChange("specialcall");
                        makeCall();
                    }
                    else if (props.activeScreen === "message") {
                        props.innerScreenChange("typing");
                        buttonTapping();
                    }
                    else if (props.activeScreen === "typing") {
                        axios.post(`https://zombiecat.dev/projects/kiwiphone/mockserver/${props.screenText}`)            
                    }
                    else {
                        props.handleInput(button.num);
                        buttonTapping();
                    }
                    break;
                case button.id === "4L":
                    handleButtonPressing(button.id);
                    if (screens.includes(props.activeScreen)) {
                        props.screenChange("left");
                        buttonTapping();
                    }
                    else if (props.activeScreen === "typing" || props.activeScreen === "dialling") {
                        props.inputGoBack();
                        buttonTapping();
                    }
                    break;
                case button.id === "4C":
                    handleButtonPressing(button.id);
                    if (props.activeScreen === "specialcall") {
                        props.innerScreenChange("David");
                        hangUp();
                    }
                    else if (props.activeScreen === "David") {
                        props.innerScreenChange("contacts");
                        buttonTapping();
                    }
                    else if (props.activeScreen === "typing") {
                        props.innerScreenChange("message");
                        buttonTapping();                  
                    }
                    else if (props.activeScreen === "oncall") {
                        hangUp();
                        props.innerScreenChange(screens[0]);
                    }
                    else {
                        props.handleInput(button.num);
                        buttonTapping();
                    }
                    break;
                case button.id === "4R":
                    handleButtonPressing(button.id);
                    if (screens.includes(props.activeScreen)) {
                        props.screenChange("right");
                        buttonTapping();
                    }
                    else if (props.activeScreen === "dialling") {
                        props.innerScreenChange("oncall")
                        makeCall();
                    }
                    else if (props.activeScreen === "typing") {
                        props.handleInput(button.num);
                    }
                    break;
                default:
                    props.handleInput(button.num);
                    handleButtonPressing(button.id);
                    buttonTapping();
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
                            <audio id="button-sound" src={buttonTap} />
                            <audio id="phone-call" src={phoneCall} />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Keyboard;