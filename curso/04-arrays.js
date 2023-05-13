/*
    Hasta ahora hemos utilizado variables que
    guardaban un único valor. Pero en aplicaciones
    reales necesitamos trabajar con conjuntos de valores.
    Para ello disponemos de las ARRAYS o listas.
    Declaramos un ARRAY utilizando corchetes
*/

const myFirstArray = ['this', 'is', 'a', 'list', 'of', 'words'];

// Las arrays en JS pueden almacenar diferentes tipos de datos

const multipleDataArray = [null, 1, undefined, { key: 'value' }, 'asdf'];

// Además, podemos acceder a sus índices indicándolos en corchetes,
// ¡¡¡pero recuerda que empezamos a contar desde el 0!!!

const firstElement = multipleDataArray[0];

// También podemos leer la longitud del array mediante su propiedad
// length

const arrayLength = multipleDataArray.length;

/*
    Ten en cuenta que, dado que el primer índice es 0, el último
    elemento del array siempre estará guardado en longitud - 1

    Por ejemplo, un array con un elemento tiene una longitud de
    1, siendo 0 el índice de su elemento.

    Por tanto, podemos acceder al último elemento de un array
    con el índice longitud - 1
*/

const lastElement = multipleDataArray[multipleDataArray.length - 1];

// Los índices también nos permiten editar elementos...

multipleDataArray[0] = 'New first element!';

// ...o añadirlos

multipleDataArray[99] = "You've added some empty positions!";

/*
    Lo más interesante de las arrays es que disponen de
    muchos métodos nativos. Conocerlos y dominarlos es cuestión
    de práctica y de consultar documentación.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    Algunos de los métodos más utilizados son:

    - forEach
    - find
    - filter
    - map
    - from
    - sort
    - includes
    - some
    - every

    Los métodos de arrays suelen iterar sobre la lista.
    Por tanto, muchas veces esperan un argumento que es
    una función, que ejecutarán sobre cada elemento de
    la lista.

    A este tipo de funciones las conocemos como callback
    functions, ya que no las ejecutamos nosotros, sino el
    iterador (método) que estamos ejecutando sobre el array.

    En estos casos, la callback function (abreviada cb)
    recibe argumentos por defecto, que están relacionados con
    el elemento sobre el que está iterando y la propia lista.

    El primer argumento suele ser el propio elemento, el segundo
    su índice y el tercero la propia lista completa
*/

multipleDataArray.forEach(element => console.log(element));

/*
    Detalle pro:

    Cuando asignamos un array a una variable, no estamos almacenándola
    como ocurría con los tipos primitivos (string, number, boolean, null,
    undefined).

    Los tipos primitivos ocupan un espacio predeterminado en la memoria
    de la máquina. Pero, como hemos visto, cuando trabajamos con arrays
    podemos alterar su longitud.

    Por tanto, es posible que a lo largo de nuestras operaciones, la lista
    ya no quepa en el espacio de memoria que tenía reservado y la máquina
    tenga que moverla a un espacio más amplio.

    Para poder gestionar esta incidencia, lo que guardamos en la variable
    no es la propia lista, sino una referencia o dirección, que conocemos
    como "puntero" (pointer).
*/

const myList = [1, 2, 3]; // myList contiene un puntero

/*
    Esto significa que, si asignamos la variable que contiene un puntero a
    otra variable, en realidad lo que le estamos asignando es el puntero,
    no una lista cuyo contenido es idéntico al de la lista original
*/

const secondList = myList; // secondList contiene el mismo puntero que myList

/*
    Como ahora ambas variables apuntan a LA MISMA lista, si hacemos cambios
    a la lista desde una de ellas, se verán reflejados en la otra
*/

myList[0] = null;
secondList[0] // Contiene null

/*
    Este no es el comportamiento deseado en la mayor parte de los casos.
    Normalmente, si hacemos cambios en una variable no queremos que se
    reflejen en la otra.

    Por eso, la forma de resolverlo, es no asignar la misma lista, sino
    crear una nueva. Es decir, trabajar sobre una copia de la lista original.

    Podemos hacer esto con el spread operator.
*/

const listCopy = [...myList];

listCopy[0] = 'Ahora los cambios están aislados';

myList[0] // null
listCopy[0] // 'Ahora los cambios están aislados'