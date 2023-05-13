/*
    Un template literal es una string en la que
    podemos insertar saltos de línea.
    Lo único que
    requiere es que utilicemos su sintaxis: En
    lugar de usar comillas, envolveremos la
    cadena en acentos hacia la izq: ``
*/

const homePage = `
<html>
    <head>
        <title>This is my homepage!</title>
    </head>
    <body>
        <h1>This homepage...</h1>
        <p>...is made with JavaScript!</p>
    </body>
</html>
`;


/*
    Pero lo más interesante es que también puedes
    insertar código de JavaScript. El código JS
    que queramos insertar irá entre llaves,
    precedidas de un símbolo de dólar
*/

const javaScript = 'world!';
const templateLiteral = `Hello, ${javaScript}`;

/*
    Ten en cuenta que, dado que estamos utilizando
    JS, podemos hacer cómputos, como operaciones
    matemáticas...
*/

const anotherTemplate = `2 + 2 equals ${2 + 2}`;

/*
    ...así como funciones
*/

const getRandomNumberInRange = (min, max) => {
    const randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}

const throwDice = `
    Tira un dado...
    El resultado ha sido ${getRandomNumberInRange(1, 6)}
    `;

/*
    Ten en cuenta que esto te permite hacer componentes
    con los que "componer" tu web:
*/

const titleText = 'Este es mi título';
const subtitleText = 'Ejemplo de componentes';
const mainText = `La clave de los componentes es que podemos reutilizarlos.
Además, podemos insertarles contenido en JS, de modo que cada vez que los utilicemos pueden ser "diferentes"!
`;
const secondaryText = `Esta es la clave de los sistemas como React`;

const createTitle = (text) => `<h1>${text}</h1>`;
const createSubtitle = (text) => `<h2>${text}</h2>`;
const createParagraph = (text) => `<p>${text}</p>`;

const compositeBody = (...components) => `<main class="container">${components.join('\n')}</main>`;

const createWebpage = (head, body) => `
<! DOCTYPE html>
<html>
    <head>
    </head>
        ${head ? head : ''}
    <body>
        ${body ? body : ''}
    </body>
</html>
`;

const myWebPage = createWebpage(null, compositeBody(
    createTitle(titleText),
    createSubtitle(subtitleText),
    createParagraph(mainText),
    createParagraph(secondaryText)
));