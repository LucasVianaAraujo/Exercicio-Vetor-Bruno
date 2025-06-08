import * as funcoes from "./funcao.js"
import prompt from "prompt-sync"
let ler = prompt ();

console.log("Informe o nome do ingresso:")
let clone = ler();

console.log("Informe o limite")
let limit = ler();

funcoes.vetor(clone,limit)