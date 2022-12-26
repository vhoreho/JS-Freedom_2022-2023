/* Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false */

const isEmpty = (obj) => Object.keys(obj).length < 1;

console.log(isEmpty({}));
console.log(isEmpty({ name: 'Pete' }));
