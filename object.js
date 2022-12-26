//Создание объектов
const person = {}; //1 способ
const person1 = new Object(); //2 способ
// const person2 = Object.create(); //3 способ
//4 способ создание объектов, через функцию конструктор
function createObject(name, age, gender) {
  return {
    name,
    age,
    gender,
  };
}

const John = new createObject('John', 26, 'male');

//Наполнение объекта данными
const person4 = {
  name: 'Peter', // свойство объекта(ключ:name - значение: 'Peter')
  age: 33, // свойство объекта
  isMale: true, // свойство объекта
  'his job': 'Frontend developer',

  getInformation: function () {
    return `Hello, my name is ${this.name}, me ${this.age} years`;
  },

  getGender: function () {
    return this.isMale ? 'Male' : 'Female';
  },
};

//Копирование объектов

const bmw = {
  model: 'X6',
  engine: 3.0,
};

const bmwX7 = bmw; //Копируется ссылка на объект, изменения исходного либо новосозданного объекта поялвляются в обоих объектах

bmwX7.model = 'X7';
bmw.model = 'X6';

//1 способ копирования без ссылки на исходный объект
const BMWX8 = { ...bmw };
BMWX8.model = 'X8';

//2 способ копирования на иcходный объект
const BMWX1 = Object.assign(bmw);
BMWX1.model = 'X1';

//Циклы объектов
for (let key in person4) {
  // console.log(key, ' ', person4[key]);
}

//Проверка существования свойства, оператор «in»
// console.log('name' in person4);



//Object.assign()
const obj1 = {a: 1, b: 2};
const obj2 = {b: 4, c: 3};

Object.assign(obj2, obj1);

//Object.entries() - метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов)
const joihn = Object.entries(person4);

//Object.prototype.hasOwnProperty() - возвращает логическое значение, указывающее, содержит ли объект указанное свойство
// console.log(person4.hasOwnProperty('age1'));

//Object.keys() - возвращает массив из собственных перечисляемых свойств 
console.log(Object.keys(person4))

//Object.values() - возвращает массив из собственных перечисляемых значений
console.log(Object.values(person4))
