import { useState, useEffect } from 'react';
import axios from 'axios';

import Keyboard from './components/keyboard/Keyboard';
import Screen from './components/screen/Screen';

import './App.css';
import logo from './kiwi-logo.png';
import turnOff from './turn-off-button.png'

function App() {
  const [keyboardInput, setKeyboardInput] = useState("");

  useEffect(() => {
    if (keyboardInput.length !== 0) {
      axios.get(`http://localhost:5000/${keyboardInput}`)
      .then((response) => {
        const { data } = response;
        handleScreen(data)
      })    
    }      
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
    <main>
      <section>
        <div id="head-section">
          <img src={turnOff} height="30" />
        </div>
        <h1><em>KiwiPhone 3000</em></h1>
      </section>
      <section>
        <Screen text={screenText} />
      </section>
      <section>
        <Keyboard handleInput={handleInput} />
      </section>
      <section id="logo-container">
        <img src={logo} height="50" />
      </section>
    </main>
  );
}

export default App;
