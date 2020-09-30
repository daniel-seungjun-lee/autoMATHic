import { RandomGenerator } from '../randomGenerator';

export class SimpleAlgebra {
  private reverseOperation: any = {
    '+': '-',
    '-': '+',
    '*': '/',
    '/': '*',
  };

  public solveSimpleAlgebra() {
    // ax + b = c
    let question: any[] = [];
    let answer;

    let isWholeNumber = false;
    while (!isWholeNumber) {
      let a = RandomGenerator.getRandomInt(1, 9);
      let b = RandomGenerator.getRandomInt(1, 9);
      let c = RandomGenerator.getRandomInt(1, 9);

      answer = (c - b) / a;

      if (answer % 1 == 0) {
        question.push(a);
        question.push('x');
        question.push('+');
        question.push(b);
        question.push('=');
        question.push(c);
        isWholeNumber = true;
      }
    }

    this.solve(question);

    console.log(`Question: ${this.toString(question)}`);
    console.log(`Answer: ${answer}`);
    return [question, answer];
  }

  public solve(question: any) {}

  public toString(question: any[]) {
    let str = '';
    question.forEach((item) => {
      str += item;
    });

    return str;
  }
}
