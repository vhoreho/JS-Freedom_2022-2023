class Animal {
  constructor(name, type, isPet) {
    this.name = name;
    this.type = type;
    this.isPet = isPet;
  }

  getAnimalInfo() {
    return `${this.name} является подтипом - ${this.type} и является ${this.isPet ? 'домашним' : 'не домашним'} животным`;
  }
}

const cat = new Animal('Кот', 'кошачьи', true);
const Tiger = new Animal('Тигр', 'кошачьи', false);

console.log(cat.getAnimalInfo());
console.log(Tiger.getAnimalInfo());

class Cat extends Animal {
  constructor(name, type, isPet, place, isPredator) {
    super(name, type, isPet);
    this.type = 'кошачьи';
    this.place = place;
    this.isPredator = isPredator;
  }

  getCatInfo() {
    return `${this.name} является подвидом ${this.type} и ${this.isPet ? 'является' : 'не является'} домашним животным, которое проживает ${
      this.place
    } и ${this.isPredator ? 'является' : 'не является'} хищником`;
  }
}

const Tom = new Cat('Кот Том', '', true, 'в домах', false);
const Sherhan = new Cat('Шрам', '', false, 'в джунглях', true);

console.log(Tom.getCatInfo());
console.log(Sherhan.getCatInfo());
