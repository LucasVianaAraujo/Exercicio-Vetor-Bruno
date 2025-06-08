import * as funcoes from "./function.js"
import prompt from "prompt-sync"
let ler = prompt ();


console.log("Informe a quantidade de alunos:")
let limit = Number(ler());

funcoes.vetor(limit)