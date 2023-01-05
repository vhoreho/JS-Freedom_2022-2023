class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  getResult(operator) {
    switch (operator) {
      case '+':
        return this.number1 + this.number2;
        break;
      case '-':
        return this.number1 - this.number2;
        break;
      case '*':
        return this.number1 * this.number2;
        break;
      case '/':
        return this.number1 / this.number2;
        break;
      default:
        return;
        break;
    }
  }
  // getSum() {
  //   return this.number1 + this.number2;
  // }
  // getSub() {
  //   return this.number1 - this.number2;
  // }
  // getMul() {
  //   return this.number1 * this.number2;
  // }
  // getDiv() {
  //   return this.number1 / this.number2;
  // }
}

const calc = new Calculator(5, 4);

// console.log(calc.getDiv(), calc.getMul(), calc.getSub(), calc.getSum());

console.log(calc.getResult('+'));
console.log(calc.getResult('-'));
console.log(calc.getResult('*'));
console.log(calc.getResult('/'));
