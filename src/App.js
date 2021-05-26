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
      setActiveScreen(screens[0]);
      setKeyboardInput("");
    }
  }

  //State and handling of option menu sections active on screen.
  const screens = ["main", "contacts", "message", "date", "time"]
  const [activeScreen, setActiveScreen] = useState(screens[0])

  function handleScreenChange(direction) {
    setKeyboardInput("");
    if (direction === "right") {
      setActiveScreen((prevState) => {
        if (screens.indexOf(prevState) === screens.length - 1) {
          return screens[0];
        }
        else {
          return screens[screens.indexOf(prevState) + 1];
        }
      })
    }
    else {
      setActiveScreen((prevState) => {
        if (screens.indexOf(prevState) === 0) {
          return screens[screens.length - 1];
        }
        else {
          return screens[screens.indexOf(prevState) - 1];
        }
      })
    }
  }

  // State and handling of phone screen output.
  const [screenText, setScreenText] = useState("");
  
  function handleScreen(incomingValue) {
    setScreenText(incomingValue)
  }

  // State and handling of keyboard input and querying to the server.
  const [keyboardInput, setKeyboardInput] = useState("");
  
  useEffect(() => {
    if (keyboardInput.length !== 0 && activeScreen === "message") {
      axios.get(`http://localhost:5000/${keyboardInput}`)
      .then((response) => {
        const { data } = response;
        handleScreen(data)
      })    
    }
    else {
      handleScreen(keyboardInput)
    }
  }, [keyboardInput, activeScreen])

  function handleInput(keystroke) {
    setKeyboardInput((prevState) => {
      return prevState + keystroke;
    });
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
        <Keyboard handleInput={handleInput} phoneStatus={phoneStatus} screenChange={handleScreenChange} />
      </section>
      <section id="logo-container">
        <img src={logo} height="50" alt="Kiwi logo" />
      </section>
    </main>
  );
}

export default App;
