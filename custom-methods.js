Array.prototype.multiply = function (n) {
  return this.map((item) => item * n);
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

let arrayOfNumbers = [1, 4, 6, 8, 10, 12];
console.log(arrayOfNumbers.multiply(2));
console.log(arrayOfNumbers.isEmpty());

let emptyArray = [];
console.log(emptyArray.isEmpty());

//Написать метод для копирования поведения метода map
//return this.map((item) => item * n);
Array.prototype.mapped = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

let arraySome = [3, 6, 7, 2224, 23512, 213];
console.log(
  'Mapped method',
  arraySome.mapped((item) => item * 2)
);

Array.prototype.modulo = function (n) {
  return this.mapped((item) => item % n);
};

console.log(arraySome.modulo(3));

let str = '';

// str.isEmpty();

String.prototype.isEmpty = function () {
  return Boolean(this.length);
};

console.log(str.isEmpty());

String.prototype.isNumber = function () {
  return +this;
};

let price = '2525';
console.log(price.isNumber());
