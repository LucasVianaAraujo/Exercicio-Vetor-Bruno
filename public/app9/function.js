import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let numero = []

    for (let i = 0; i < limit; i++) {
        let num = Number(ler())
        numero.push(num)
    }

    let numero1 = []

    for (let i = 0; i < limit; i++) {
        let item = numero[i]
        numero1.push(item * 2)
    }

    console.log("O dobro de cada número é:")
    for (let numero of numero1) {
        console.log(numero);
    }

}