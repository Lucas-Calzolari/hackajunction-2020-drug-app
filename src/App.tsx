import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import GamePage from './page/GamePage';

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      {
        !started && <HomePage onStart={() => setStarted(true)}/>
      }
      {
        started && <GamePage/>
      }
    </div>
  );
}

export default App;
