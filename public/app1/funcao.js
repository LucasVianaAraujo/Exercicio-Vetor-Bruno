import prompt from "prompt-sync"
let ler = prompt()

let numeros = [];

export function vetor() {
    for (let i = 0; i < 5; i++) {
        let n = Number(ler())
        numeros.push(n)
    }

    console.log("Você digitou os números:")
    for (let n of numeros) {
        console.log(n)
    }
}