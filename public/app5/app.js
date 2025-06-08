import * as funcoes from "./funcao.js"
import prompt from "prompt-sync"
let ler = prompt ();

console.log("Informe o tabuada")
let tab = Number(ler());

funcoes.vetor(tab)