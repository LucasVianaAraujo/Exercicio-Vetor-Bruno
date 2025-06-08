import * as funcoes from "./funcao.js"
import prompt from "prompt-sync"
let ler = prompt ();

console.log("Informe o limite")
let limit = Number(ler());

funcoes.vetor(limit)