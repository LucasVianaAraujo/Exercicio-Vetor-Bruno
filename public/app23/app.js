import * as funcoes from "./function.js"
import prompt from "prompt-sync";
let ler = prompt();

console.log("Informe um número (0 a 12) equivalente ao mês do ano:");
let n = Number(ler());

funcoes.vetor(n)