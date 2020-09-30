import { RandomGenerator } from './randomGenerator';

export class SimpleMath {
    public generateAdditionProblem(digit: number , num: number) {
        let question = "";
        let answer = 0;
        let tmp;
        let list = new Array ();
        
        //Generates random numbers and saves it to the array
        for (let i = 0; i < num; i++){
            tmp = RandomGenerator.getRandomInt(Math.pow(10,digit));
            list[i] = tmp;
        }
        
        //print out the question
        question = list[0];
        for (let i = 1; i < num; i++) {
            question += " + " + list[i];
        }

        for (let i = 0; i < num; i++){
            let temp = list[i];
            answer = answer + temp;
        }
        console.log("Question " + question);
        console.log("Solution " + answer);

        return [question, answer]
    }

    public generateSubtractionProblem() {
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + ' - ' + y);

        let question = x + ' - ' + y;
        let answer = x - y;

        console.log('Solution is: ' + answer);

        return [question, answer];
    }

    public generateMultiplyProblem() {
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + ' * ' + y);

        let question = x + ' * ' + y;
        let answer = x * y;

        console.log('Solution is: ' + answer);

        return [question, answer];
    }

    public generateDivideProblem() {
        let x = RandomGenerator.getRandomInt(100);
        let y = RandomGenerator.getRandomInt(100);

        console.log(x + ' / ' + y);

        let question = x + ' / ' + y;
        let answer = x / y;

        console.log('Solution is: ' + answer);

        return [question, answer];
    }
}
