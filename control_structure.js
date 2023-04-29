const prompt = require("prompt-sync")({sigint:true});

const LEGAL_AGE = 18;

const userInput = prompt("Edad del usuario");
const userAge = Number(userInput);

if (LEGAL_AGE >= userAge){

    console.log("no puedo")
}