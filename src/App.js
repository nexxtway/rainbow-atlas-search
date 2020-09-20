import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from './firebase';
import Home from './pages/main'


function App() {
  return (
    <RainbowFirebaseApp app={app}>
        <Home />
    </RainbowFirebaseApp>
  );
}

export default App;
