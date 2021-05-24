import { useState, useEffect } from 'react';
import axios from 'axios';

import Keyboard from './components/keyboard/Keyboard';
import Screen from './components/screen/Screen';

import './App.css';

function App() {
  const [keyboardInput, setKeyboardInput] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/${keyboardInput}`)
    .then((response) => {
      const { data } = response;
      handleScreen(data)
    })    
  }, [keyboardInput])

  function handleInput(keystroke) {
    setKeyboardInput((prevState) => {
      return prevState + keystroke;
    });
  }

  const [screenText, setScreenText] = useState("");
  
  function handleScreen(incomingValue) {
    setScreenText(incomingValue)
  } 
  
  return (
    <div>
      <Screen text={screenText} />
      <Keyboard handleInput={handleInput} />
    </div>
  );
}

export default App;
