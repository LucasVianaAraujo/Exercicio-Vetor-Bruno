import * as funcoes from "./function.js"
import prompt from "prompt-sync";
let ler = prompt();

console.log("Informe o nome do projeto:");
let nome = ler();

console.log("Informe a quantidade de doações:");
let limit = Number(ler());

console.log("Informe a meta a ser batida:");
let meta = Number(ler());

funcoes.vetor(nome,limit,meta)