import './App.css';
import MyComp from './components/MyComp';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [state, setState ] = useState(0);
  let score = 0;
  const myRef = useRef(0);
  
  const clickHandler1 = () => {
    setState(state+1)
    console.log('state', state)
  }
  const clickHandler2 = () => {
    score+=1;
    console.log('변수', score)
  }
  const clickHandler3 = () => {
    myRef.current = myRef.current + 1;
    console.log('ref', myRef.current)
  }
  return (
    <>
    {/* {
      count === 12 && <MyComp />
    } */}
      <h1>state: {state}</h1>
      <h1>변수: {score}</h1>
      <h1>ref: {myRef.current}</h1>
      <button onClick={clickHandler1}>state</button>
      <button onClick={clickHandler2}>변수</button>
      <button onClick={clickHandler3}>ref</button>
    </>
  );
}

export default App;
