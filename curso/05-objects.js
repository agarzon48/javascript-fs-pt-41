/*
    A veces las listas son insuficientes para
    gestionar la información que necesita nuestra
    aplicación.

    El motivo es que, como sabes, a la hora de acceder
    al contenido de una lista lo hacemos mediante sus
    índices. Pero un índice es poco informativo, y a 
    veces puede cambiar (por ejemplo, si hemos añadido
    un nuevo elemento al principio de la lista).

    ¿No sería mejor contar con una "etiqueta", que nos
    permita identificar cada uno de los elementos?

    Esta es la base de los OBJETOS en JavaScript. Los
    OBJETOS son listas o colecciones de pares. Cada par
    está compuesto por una clave (que es la "etiqueta")
    y un valor (que es el contenido).
*/

const strawberry = {    // El objeto se declara con llaves.
    name: 'strawberry', // A cada par clave-valor lo llamamos
    portion: 100,       // PROPIEDAD.
    carbs: 7.68,        // A cada clave (key) le asignamos un
    prot: 0.67,         // valor con dos puntos.
    fat: 0.3,           // Cada par clave-valor se separa con
    color: 'red',       // una coma.
    cats: ['fruit'],    // Podemos asignar diferentes tipos de
    price: 3.78         // datos a una clave
}

// Para acceder a una clave utilizamos el nombre del objeto,
// seguido de un punto y seguido del nombre de la clave

strawberry.price;

// Si el nombre de la clave está guardado en una variable o
// tenemos que computarlo, podemos utilizar corchetes

const getRandomProperty = () => {
    const posibilities = ['name', 'carbs', 'cats', 'fat'];
    const randomIndex = Math.floor(Math.random(posibilities.length)) + 1;
    return posibilities[randomIndex];
}

const randomProperty = getRandomProperty();
strawberry[randomProperty];

// Estas notaciones nos permiten acceder a una propiedad. Además
// de leerlas, podemos sustituirlas...

strawberry.cats = ['fruit', 'healthy', 'sweet'];

// ...o añadirlas, si todavía no existían

strawberry.recipes = ['fresas con nata', 'mousse de fresa'];

/*
    Cuando a una clave le asignamos una función no la llamamos
    propiedad, sino MÉTODO.

    Los métodos nos permiten agrupar funciones en un objeto y
    ejecutarlas. Si lo piensas, ya los has utilizado al trabajar
    con strings y arrays
*/

const eat = () => console.log('Yum! Delicious!'); // 1. Declaramos
strawberry.eat = eat; // 2. Asignamos
strawberry.eat(); // 3. Ejecutamos

/*
    Al contrario que las arrays, los objetos apenas tienen
    métodos. Esto se debe a que somos nosotros, como
    programadores, quienes deberíamos crear los métodos de
    cada objeto.

    Lo que sí tenemos es un objeto global Object, que incorpora
    algunos métodos útiles para trabajar con objetos
*/

Object.keys(strawberry);     // Devuelve las keys de strawberry en un array
Object.values(strawberry);   // Devuelve los values de strawberry en un array
Object.entries(strawberry);  // Devuelve cada par clave-valor de strawberry
                             // en un array, agrupados a su vez en un array general