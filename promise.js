// let promise = new Promise((resolve, reject) => {
//   //   resolve("Success");
//   reject("Promise Error");
// });

// // promise
// //   .then((value) => console.log(value))
// //   .catch((erorr) => {
// //     console.error(erorr);
// //   });

// /* Создать промис, у которого при успешном выполнении, в консоль выводится
// сообщение о том что в питомник (массив) добавлено новое животное.
// В случае ошибки у нас в консоль
// выводится сообщение о том что питомник переполнен.
// */

// let hostel = [];

// function addNewPets(name) {
//   return new Promise((resolve, reject) => {
//     if (name) {
//       hostel.push(name);
//       resolve(hostel);
//     }
//     reject("Pets hotel is full");
//   });
// }

// let availableSlotsForDog = new Promise((resolve, reject) => {
//   pets += "Dog";
//   resolve(pets);
//   reject("Pets hostel it is full");
// });

// addNewPets("Tuzik");
// addNewPets("Kopa");

// // addNewPets("Gavrik")
// //   .then((value) => console.log("In hostel now ", value.join(", ")))
// //   .catch((error) => console.log(error));
// // availableSlotsForDog.then((value) => console.log("Added new pet to pets: ", value)).catch((error) => console.log(error));

function getPromiseResult(status) {
  return new Promise((resolve, reject) => {
    if (status === "success") {
      resolve("Done");
    }
    reject("Error");
  });
}

async function asyncGetPromiseResult(status) {
  let result = await status;
  return result;
}

let resultStatus = "success";

// getPromiseResult(resultStatus)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

asyncGetPromiseResult("success").then((value) => console.log(value));
