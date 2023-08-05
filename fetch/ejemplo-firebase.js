const url =
  "https://mi-base-de-datos";

fetch(url)
  .then((response) => {
    if (response.ok === false) {
      throw Error("Ha habido un error");
    }

    return response.json();
  })
  .then((jsonData) => console.log(jsonData))
  .catch((error) => console.log(error));


// POST

// const url = "https://mi-base-de-datos";
// const user = {
//     name: "Chillin",
//     password: 'asd'
// }

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
// })
//     .then(() => {
//       console.log('Todo ha ido bien')
//     })
//     .catch((error) => console.log(error));
