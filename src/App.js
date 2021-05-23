import { useState } from 'react'; 

import Keyboard from './components/keyboard/Keyboard';
import Screen from './components/screen/Screen';

import './App.css';

function App() {
  const [screenText, setScreenText] = useState("");

  function handleScreen(keystroke) {
    setScreenText((prevState) => {
      return prevState + keystroke;
    });
  }
  
  return (
    <div>
      <Screen text={screenText} />
      <Keyboard handleScreen={handleScreen} />
    </div>
  );
}

export default App;
