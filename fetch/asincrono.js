// console.log(1);

// setTimeout(() => { // Código asíncrono - asynchronous code
//     console.log(2);
// }, 1);

// console.log(3);

//////////////////

// let user = '';

// const login = () => {
//     setTimeout(() => {
//         user = "Raspas";
//     }, 10);
// };
// const greet = user => console.log('Hola, ', user);

// login();
// greet(user);

//////////

// let user = "";

// const login = () => {
//   return new Promise((resolve) => { // pending - fulfilled (resolve, reject)
//     setTimeout(() => {
//       user = "Raspas";
//       resolve();
//     }, 1);
//   });
// };
// const greet = (user) => console.log("Hola, ", user);

// const loginState = login();

// login().then(() => {
//     greet(user);
// });

/////////////

// MÉTODOS HTTP: GET, POST, PUT, PATCH, DELETE

// PETICIONES GET
// fetch("https://www.swapi.tech/api/people/")
//     .then((response) => {
        
//         if (response.ok === false) {
//             throw Error('Ha habido un error');
//         }

//         return response.json();
//     })
//     .then((jsonData) => console.log(jsonData))
//     .catch((error) => console.log(error));

// PETICIONES POST
fetch("https://www.swapi.tech/api/people/", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ example: 'example' })
})
    .then((response) => {
        
        if (response.ok === false) {
            throw Error('Ha habido un error');
        }

        return response.json();
    })
    .then((jsonData) => console.log(jsonData))
    .catch((error) => console.log(error));