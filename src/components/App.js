import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  calculate();
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
