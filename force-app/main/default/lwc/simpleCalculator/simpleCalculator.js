import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track result;

    firstNumber;
    secondNumber;


    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName==='firstNumber'){
            this.firstNumber = event.target.value;
        }
        else if(inputBoxName==='secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = `Result of ${firstNum} + ${secondNum} is ${firstNum + secondNum}`;
    }

    subtractHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = `Result of ${firstNum} - ${secondNum} is ${firstNum - secondNum}`;
    }

    multiplyHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = `Result of ${firstNum} * ${secondNum} is ${firstNum * secondNum}`;
    }

    divideHandler(){
        const firstNum = parseInt(this.firstNumber);
        const secondNum = parseInt(this.secondNumber);
        this.result = `Result of ${firstNum} / ${secondNum} is ${firstNum / secondNum}`;
    }

}