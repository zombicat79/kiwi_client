import { useState, useEffect } from 'react';
import axios from 'axios';

import Keyboard from './components/keyboard/Keyboard';
import Screen from './components/screen/Screen';

import './App.css';
import logo from './kiwi-logo.png';
import turnOff from './turn-off-button.png'

function App() {
  // State and handling of phone status (on/off).
  const [phoneStatus, setPhoneStatus] = useState("off")

  function handlePhoneStatus() {
    if (phoneStatus === "off") {
      setPhoneStatus("on");
    }
    else {
      setPhoneStatus("off");
    }
  }

  // State and handling of keyboard input and querying to the server.
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

  //State and handling of option menu sections active on screen.
  const [activeScreen, setActiveScreen] = useState("time")

  // State and handling of phone screen output.
  const [screenText, setScreenText] = useState("Hello");

  function handleScreen(incomingValue) {
    setScreenText(incomingValue)
  } 
  
  return (
    <main>
      <section>
        <div id="head-section">
          <button id="turn-off-button" onClick={() => handlePhoneStatus()}>
            <img src={turnOff} height="30" alt="On/off switch" />
          </button>
        </div>
        <h1><em>KiwiPhone 3000</em></h1>
      </section>
      <section>
        <Screen text={screenText} phoneStatus={phoneStatus} activeScreen={activeScreen} />
      </section>
      <section>
        <Keyboard handleInput={handleInput} phoneStatus={phoneStatus} />
      </section>
      <section id="logo-container">
        <img src={logo} height="50" alt="Kiwi logo" />
      </section>
    </main>
  );
}

export default App;
