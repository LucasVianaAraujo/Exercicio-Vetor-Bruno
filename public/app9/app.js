import * as funcoes from "./function.js"
import prompt from "prompt-sync"
let ler = prompt();

console.log("Informe o limite:")
let limit = Number(ler());

console.log("Informe três números:")
funcoes.vetor(limit)