import React, { useState, useEffect } from 'react';
import Ball from './components/Ball';
import './App.css';

const App = () => {
  const [countdownTime, setCountdownTime] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState('stop'); // Nový stav pro fázi dýchání

  useEffect(() => {
    let countdownInterval;

    if (isRunning) {
      countdownInterval = setInterval(() => {
        setCountdownTime(prevTime => {
          if (prevTime === 0) {
            switch (phase) {
              case 'nádech':
                setPhase('zadržení');
                return 7; // Čas pro zadržení dechu
              case 'zadržení':
                setPhase('výdech');
                return 8; // Čas pro výdech
              case 'výdech':
                setPhase('nádech');
                return 4; // Čas pro nádech
              default:
                return 4;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [isRunning, phase]);

  const startAnimation = () => {
    setIsRunning(true);
    setPhase('nádech');
    setCountdownTime(4);
  };

  const stopAnimation = () => {
    setIsRunning(false);
    setCountdownTime(4);
    setPhase('stop');
  };

  return (
    <div className="container">
      <Ball phase={phase} />
      <div id="text" className="text">
        {isRunning ? `${countdownTime} sekund ${phase}` : 'Klikněte na start pro začátek dechového cvičení'}
      </div>
      <button id="startBtn" onClick={startAnimation}>Start</button>
      <button id="stopBtn" onClick={stopAnimation}>Stop</button>
    </div>
  );
};

export default App;
