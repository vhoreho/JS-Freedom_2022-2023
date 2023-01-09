const person = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  getFullName: function () {
    return `${this.name} ${this.surname}`;
  },
  getJob: function (job, phoneNumber) {
    return `${this.name} ${this.surname}: ${job} - ${phoneNumber}`;
  },
};

// console.log(person.getFullName());
console.log(person.getJob('frontend', '8-017-336-71-22'));

const person2 = {
  name: 'John',
  surname: 'Parker',
  age: 22,
};

//Привязка контекста вызова через bind(в качестве аргумента передается привязываемый объект)
person2.getFullName = person.getFullName.bind(person);
/*
Метод call принимает первый обязательный аргумент - объект к которому привязывается контекст,
а после передаются аргументы необхолимые для вызова функции через запятую (аргументов может быть
неограниченное количество)
*/
person2.getJob = person.getJob.call(person, 'backend', '8-017-336-71-22');
/*
Метод apply принимает первый обязательный аргумент - объект к которому привязывается контекст,
а после передаются аргументы необходимые для вызова функции в виде массива (аргументов может быть
у метода apply только два)
*/
person2.getJob2 = person.getJob.apply(person, ['backend', '8-017-336-71-22']);

console.log('Bind: ', person2.getFullName());
console.log('Call: ', person2.getJob);
console.log('Apply: ', person2.getJob2);
