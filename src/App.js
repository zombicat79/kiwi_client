import { useState, useEffect } from 'react';
import axios from 'axios';

import Keyboard from './components/keyboard/Keyboard';
import Screen from './components/screen/Screen';
import ViewporAlert from './pages/ViewportAlert';

import './App.css';
import logo from './img/zombiecat-trans-logo.png';
import turnOff from './img/turn-off-button.png';

function App() {
  // Determines whether the page is being displayed on a desktop device or not
  const [viewportType, setViewportType] = useState('desktop');
  const handleViewportType = () => {
    if (window.innerWidth < 1300) {
      setViewportType('mobile');
    } else {
      setViewportType('desktop');
    }
  }

  useEffect(() => {
    handleViewportType();
  })

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

  function handleInnerScreenChange(newScreen) {
    setKeyboardInput("");
    setActiveScreen(newScreen)
  }

  // State and handling of phone screen output.
  const [screenText, setScreenText] = useState("");
  
  function handleScreen(incomingValue) {
      setScreenText(incomingValue)
  }

  // State and handling of keyboard input and querying to the server.
  const [keyboardInput, setKeyboardInput] = useState("");
  
  useEffect(() => {
    if (keyboardInput.length !== 0 && activeScreen === "typing" && !keyboardInput.toString().includes(0) && !keyboardInput.toString().includes(1) && !keyboardInput.includes(">")) {
      axios.get(`https://zombiecat.dev/projects/kiwiphone/mockserver/${keyboardInput}`)
      .then((response) => {
        const { data } = response;
        handleScreen(data)
      })    
    }
    else if (keyboardInput.includes(">")) {
        axios.get(`https://zombiecat.dev/projects/kiwiphone/mockserver/favorites/${keyboardInput}`)
        .then((response) => {
            const { data } = response;
            handleScreen(data);
        })  
    }
    else if (keyboardInput.length > 0 && activeScreen !== "David" && activeScreen !== "specialcall") {
      setActiveScreen("dialling");
      handleScreen(keyboardInput);
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

  function inputGoBack() {
    setKeyboardInput((prevState) => {
      const curtailedInput = prevState.toString().split("").slice(0, prevState.length - 1).join("");
      return curtailedInput;
    })
  }
  
  return (
    <main>
      {
        viewportType === "desktop" &&
        <section>
          <section>
            <div id="head-section">
              <button id="turn-off-button" onClick={() => handlePhoneStatus()}>
                <img src={turnOff} height="30" alt="On/off switch" />
              </button>
            </div>
            <h1><em>KiwiPhone</em></h1>
          </section>

          <section>
            <Screen text={screenText} phoneStatus={phoneStatus} activeScreen={activeScreen} />
          </section>

          <section id="keyboard">
            <Keyboard handleInput={handleInput} phoneStatus={phoneStatus} screenChange={handleScreenChange} 
                  activeScreen={activeScreen} innerScreenChange={handleInnerScreenChange} inputGoBack={inputGoBack} 
                  screenText={screenText} handleScreen={handleScreen} keyboardInput={keyboardInput} />
          </section>

          <section id="logo-container">
            <a href="https://zombiecat.dev/" rel="noreferrer" target="_blank" class="branding-pack branding-pack--phone">
              <img class="branding-img" src={logo} alt="ZombieCat logo" />
              <h1 class="branding-heading">Zombiecat</h1>
            </a>
          </section>
        </section>
      }
      
      {
        viewportType === "mobile" &&
        <section id="alert-wrapper">
          <ViewporAlert />
        </section>
      }
    </main>
  );
}

export default App;
