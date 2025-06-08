import * as funcoes from "./function.js"
import prompt from "prompt-sync";
let ler = prompt();

console.log("Informe um número (0 a 6) equivalente ao dia da semana");
let n = Number(ler());

funcoes.vetor(n)