//fetch
let posts = fetch("https://jsonplaceholder.typicode.com/posts");

// posts
//   .then((body) => body.json())
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error.message));

function getData(type) {
  let data = fetch(`https://jsonplaceholder.typicode.com/${type}`);
  return data
    .then((body) => body.json())
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message));
}

async function asyncGetData(type) {
  let data = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
  try {
    let body = await data.json();
    console.log(body);
  } catch (error) {
    console.log("error");
  }
}

// asyncGetData("use");

/* 
Написать функцию, которая в качестве параметра принимает идентефикатор
пользователя и по данному идентефикатору осуществляет запрос на сервер
по пути (например, https://jsonplaceholder.typicode.com/users/1) и 
возвращает данные о пользователе
*/

async function getUser(id) {
  let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  try {
    let body = await data.json();
    console.log(body);
  } catch (error) {
    console.log("User does not exist");
  }
}

// getUser(14);

/* 
Написать функцию, которая в качестве параметра принимает идентефикатор
постa и по данному идентефикатору осуществляет запрос на сервер
по пути (например, https://jsonplaceholder.typicode.com/users/1) и 
возвращает комментарии написанные данным пользователем
*/
async function getCommentsById(id) {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  try {
    let body = await data.json();
    console.log(body);
  } catch (error) {
    console.log("User does not exist");
  }
}

// getCommentsById(2);

//Use POST method
async function createPost(post) {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let body = await data.json();
  console.log(body);
}

let post1 = {
  userId: 1,
  title: "Our new post",
  body: "new post",
};

createPost(post1);

//PUT
async function updatePost(id, post) {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let body = await data.json();
  console.log(body);
}

updatePost(1, {
  id: 1,
  userId: 1,
  title: "Our new post",
  body: "new post",
});

//PATCH
async function patchPost(id, post) {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let body = await data.json();
  console.log(body);
}

patchPost(2, { body: "Текст второго поста" });

//DELETE
async function deletePost(id) {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  let body = await data.json();
  console.log(data);
}

deletePost(55);
