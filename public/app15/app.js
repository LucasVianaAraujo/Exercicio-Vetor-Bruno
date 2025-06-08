import * as funcoes from "./function.js"
import prompt from "prompt-sync"
let ler = prompt();

console.log("Informe o limite")
let limit = Number(ler());

funcoes.vetor(limit)