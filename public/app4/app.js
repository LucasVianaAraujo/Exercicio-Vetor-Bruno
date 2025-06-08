import * as funcoes from "./funcao.js"
import prompt from "prompt-sync"
let ler = prompt ();

console.log("Informe a qtd limite")
let qtd = Number(ler());

funcoes.vetor(qtd)