import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [abc, setAbc] = useState('화이팅');

  const handleButtonClick = () => {
    console.log('click');
    setAbc('잘자');
  };

  const handleButtonClick2 = () => {
    setAbc('잘잤다');
  };

  return (
    <div>
      {abc}
      <button onClick={handleButtonClick}>미연아</button>
      <button onClick={handleButtonClick2}>잘잤냐</button>
    </div>
  );
}

export default App;
