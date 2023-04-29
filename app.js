const prompt = require("prompt-sync")({sigint:true});

const welcomeMessage = prompt ("Hola, elige una aplicacion");

        1. Contar letras
        2. Generar contraseñas
        3.Calculadora
        4.Encontrar palabras
        5.Generar numero aleatorio
        6.Piedra,papel tijera
        7.Blackjack ;

const selectedApp = Number(welcomeMessage);

const countLetter = "countLetter";

const generatePass = "generatePass";

const calculator = "calculator";

const findWords = "findWords";

const generateRandomNumbers = "generateRandomNumbers";

const rockPaperScissors = "rockPaperScissors";

const blackjack ="blackjack";

if (selectedApp === 1){
console.log (countLetter);

}else if (selectedApp === 2) {
    console.log (generatePass);

}else if (selectedApp ===3) {
    console.log (calculator);

}else if (selectedApp=== 4){
    console.log(selectedApp);   

}else if (selectedApp === 5) {
    console.log(generateRandomNumbers);

}else if (selectedApp === 6) {
    console.log(rockPaperScissors);

} else if (selectedApp ===7){
    console.log (blackjack);
} else (console.log("Esa app no existe")){


}

switch (selectedApp) {
    case 1:
    console.log(countLetter);
    break;
    case 2:
    console.log(generatePass);
    break;
    case 3:
    console.log(calculator);
    break;
    case 4:
    console.log(findWords);
    break;
    case 5:
    console.log(generateRandomNumbers);
    break;
    case 6:
    console.log (rockPaperScissors);
    break;
    console.log (blackjack);
    break;

    default:
        console.log ("no existe")

}

while (selectedApp ===0 