import * as React from 'react';
import { SimpleAlgebra } from '../math/algebra/simpleAlgebra';

function SimpleAlgebraButton(props: any) {
  // const [problem, setProblem] = React.useState('');
  let simpleAlgebra = new SimpleAlgebra();

  let getProblem = () => {
    let problem = simpleAlgebra.solveSimpleAlgebra();
    props.replace(problem[0]);
    props.save(problem[1]);
  };
  return (
    <div>
      <button onClick={() => getProblem()}>{props.text}</button>
    </div>
  );
}

export { SimpleAlgebraButton };
