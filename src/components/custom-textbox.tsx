import * as React from 'react';

function CustomTextbox(props: any) {
  const [msg, setMsg] = React.useState('');
  let checkAnswer = () => {
    console.log(props.answer);
    if (props.answer == inputValue) {
      setMsg('Correct!');
    } else {
      setMsg('Try Again :(');
    }
  };

  const [inputValue, setInputValue] = React.useState('');
  let updateInputValue = (evt: any) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <label>{props.text}: </label>
      <input value={inputValue} onChange={(evt) => updateInputValue(evt)}></input>
      <button onClick={checkAnswer}>Submit</button>
      {msg}
    </div>
  );
}

export { CustomTextbox };
