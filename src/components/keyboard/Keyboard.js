import { useState} from 'react';

const keymap = [
    {id: "1L", num: 1, letters: ""}, 
    {id: "1C", num: 2, letters: "abc"}, 
    {id: "1R", num: 3, letters: "def"}, 
    {id: "2L", num: 4, letters: "ghi"}, 
    {id: "2C", num: 5, letters: "jkl"}, 
    {id: "2R", num: 6, letters: "mno"}, 
    {id: "3L", num: 7, letters: "pqrs"}, 
    {id: "3C", num: 8, letters: "tuv"}, 
    {id: "3R", num: 9, letters: "wxyz"},
    {id: "4L", num: "", letters: "*+"},
    {id: "4C", num: 0, letters: ""},
    {id: "4R", num: "", letters: "#"}
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
                                if (props.phoneStatus === "on") {
                                    props.handleInput(el.num);
                                    handleButtonPressing(el.id);
                                }
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