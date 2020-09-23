export class SimpleMath {

    private getRandomInt (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    public generateAdditionProblem() {
        let x = this.getRandomInt(100);
        let y = this.getRandomInt(100);

        console.log(x + " + " + y);
        
        let answer = x + y; 
        
        console.log("Solution is: " + answer);

    }

    public generateSubtractionProblem(){
        let x = this.getRandomInt(100);
        let y = this.getRandomInt(100);

        console.log(x + " - " + y);
        
        let answer = x - y; 
        
        console.log("Solution is: " + answer);
    }

    public generateMultiplyProblem() {
        let x = this.getRandomInt(100);
        let y = this.getRandomInt(100);

        console.log(x + " * " + y);
        
        let answer = x * y; 
        
        console.log("Solution is: " + answer);
    }

    public generateDivideProblem(){
        let x = this.getRandomInt(100);
        let y = this.getRandomInt(100);

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