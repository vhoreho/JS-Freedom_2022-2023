//Создание объекта с использованием функции конструктора
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const audi = new Car('Audi', 'Q7');

console.log(audi);

//Создание объекта посредством использования классов
class CarClass {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  getCarInfo() {
    return `${this.name} ${this.model}`;
  }
}

const AudiClass = new CarClass('Audi', 'Q6');
const BMWClass = new CarClass('BMW', 'X7');
const PeugeotClass = new CarClass('Peugeot', '407');

console.log(AudiClass.getCarInfo());
console.log(BMWClass.getCarInfo());
console.log(PeugeotClass.getCarInfo());

class ElectricCarClass extends CarClass {
  constructor(name, model, type) {
    super(name, model);
    this.type = type;
  }

  getCarInfo() {
    return `${this.name} ${this.model} ${this.type}`;
  }
}

const TeslaS = new ElectricCarClass('Tesla', 'ModelS', 'electro');
TeslaS.model = 'ModelX';

console.log(TeslaS.getCarInfo());
