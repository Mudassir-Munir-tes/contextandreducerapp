import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import number from './contextcomponent';
import Usedcontext from './usedcontext';

function App() {

  let numberstate=useState(1);
  return (
    <number.Provider value={numberstate}>
    <div className="App">
     
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Usedcontext />
    </div>
    </number.Provider> 
  );
}

export default App;
