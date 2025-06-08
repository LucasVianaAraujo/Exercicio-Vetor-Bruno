import prompt from "prompt-sync"
let ler = prompt ();

export function vetor(qtd) {
    let numero = [];
    for (let i = 0; i < qtd; i++) {
        let n = Number(ler())
        numero.push(n)
    }

    for (let item of numero) {
        console.log(item)
    }
}