import * as React from 'react';
import { SimpleMath } from '../math/simpleMath';

function SimpleMathButton(props: any) {
  // const [problem, setProblem] = React.useState('');
  let simpleMath = new SimpleMath();

  let getProblem = (type: string) => {
    if (type === 'addition') {
      let problem = simpleMath.generateAdditionProblem(2, 3);
      props.replace(problem[0]);
      props.save(problem[1]);
    }
    if (type === 'subtraction') {
      let problem = simpleMath.generateSubtractionProblem();
      props.replace(problem[0]);
      props.save(problem[1]);
    }
    if (type === 'multiplication') {
      let problem = simpleMath.generateMultiplyProblem();
      props.replace(problem[0]);
      props.save(problem[1]);
    }
    if (type === 'division') {
      let problem = simpleMath.generateDivideProblem();
      props.replace(problem[0]);
      props.save(problem[1]);
    }
  };
  return (
    <div>
      <button onClick={() => getProblem(props.type)}>{props.text}</button>
    </div>
  );
}

export { SimpleMathButton };
