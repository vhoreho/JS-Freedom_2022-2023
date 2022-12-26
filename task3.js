/*
  У нас есть объект, в котором хранятся зарплаты нашей команды:

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  Напишите функцию для суммирования всех зарплат и сохраните результат в переменной sum. 
  Должно получиться 390.

  Если объект salaries пуст, то результат должен быть 0.
*/

//Реализация с использованием Object.values и reduce
const countSalaries = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

//Реализация с использованием цикла for...in
const countSalaries2 = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(
  countSalaries2({
    John: 100,
    Ann: 160,
    Pete: 130,
    Carl: 700,
    Ann: 260,
    Pete: 930,
    John: 300,
    Ann: 560,
    Pete: 330,
  })
);
