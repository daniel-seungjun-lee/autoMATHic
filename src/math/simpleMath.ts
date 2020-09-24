import { RandomGenerator } from './randomGenerator';

export class SimpleMath {

    public generateAdditionProblem() {
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + " + " + y);
        let question = x + " + " + y;
        let answer = x + y; 
        
        console.log("Solution is: " + answer);
        return [question, answer];
    }

    public generateSubtractionProblem(){
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + " - " + y);
        
        let answer = x - y; 
        
        console.log("Solution is: " + answer);
    }

    public generateMultiplyProblem() {
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + " * " + y);
        
        let answer = x * y; 
        
        console.log("Solution is: " + answer);
    }

    public generateDivideProblem(){
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + " / " + y);
        
        let answer = x / y; 
        
        console.log("Solution is: " + answer);
    }
}

let simpleMath = new SimpleMath();
simpleMath.generateAdditionProblem();
simpleMath.generateSubtractionProblem();
simpleMath.generateMultiplyProblem();
simpleMath.generateDivideProblem();