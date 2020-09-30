import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { SimpleMathButton } from './components/simple-math';
import { SimpleAlgebraButton } from './components/simple-algebra';
import { CustomTextbox } from './components/custom-textbox';
// import ButtonBase from './components/ButtonBase';

function App() {
  const [problem, setProblem] = React.useState('');
  let changeProblem = (newProblem: string) => {
    setProblem(newProblem);
  };

  const [answer, setAnswer] = React.useState('');
  let saveAnswer = (newAnswer: string) => {
    setAnswer(newAnswer);
  };

  return (
    <div className="App">
      <Header text="Welcome" />
      <SimpleMathButton text="Get Addition" type="addition" replace={changeProblem} save={saveAnswer} />
      <SimpleMathButton text="Get Multiplication" type="multiplication" replace={changeProblem} save={saveAnswer} />
      <SimpleAlgebraButton text="Get Algebra Question" replace={changeProblem} save={saveAnswer} />
      <CustomTextbox text="Answer" answer={answer} />
      <div>{problem}</div>
    </div>
  );
}

// {/* <img src={logo} className="App-logo" alt="logo" /> */}
export default App;
