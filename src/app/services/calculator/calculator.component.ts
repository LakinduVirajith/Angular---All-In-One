import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  number1!: number;
  number2!: number;
  answer: number = 0;
  showResult: boolean = false;
  
  /* INJECTING A SERVICE INTO A COMPONENT */
  constructor(private calculatorService: CalculatorService) {}

  addOperation(){
    this.answer = this.calculatorService.add(this.number1, this.number2);
    this.showResult = !isNaN(this.answer);
  }
  subtractOperation(){
    this.answer = this.calculatorService.subtract(this.number1, this.number2);
    this.showResult = !isNaN(this.answer);
  }
  multiplyOperation(){
    this.answer = this.calculatorService.multiply(this.number1, this.number2);
    this.showResult = !isNaN(this.answer);
  }
  divideOperation(){
    this.answer = this.calculatorService.divide(this.number1, this.number2);
    this.showResult = !isNaN(this.answer);
  }
  clearHandle(){
    this.number1 = NaN;
    this.number2 = NaN;
    this.answer = 0;
  }
}
