import prompt from "prompt-sync"
let ler = prompt();

export function vetor (qtd) {
    let numero = [];

for (let cont = 0; cont < qtd; cont++) {
    let n = Number(ler())
    numero.push(n)
}

console.log("Você digitou os números:")
for (let n of numero) {
    console.log(n)
}
}