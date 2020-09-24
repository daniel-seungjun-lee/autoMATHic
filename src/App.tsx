import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleMath } from './math/simpleMath'

function App() {
  let simpleMath = new SimpleMath();
  let val = simpleMath.generateAdditionProblem();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Question: {val[0]}
        </p>
        <p>
          Answer:  {val[1]}
        </p>
      </header>
    </div>
  );
}

export default App;
