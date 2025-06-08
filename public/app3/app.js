import * as funcoes from "./funcao.js"
import prompt from "prompt-sync"
let ler = prompt ();

console.log("Informe a quantidade limite:")
let qtd = Number(ler());

console.log("Você digitou os números:")
funcoes.vetor(qtd)