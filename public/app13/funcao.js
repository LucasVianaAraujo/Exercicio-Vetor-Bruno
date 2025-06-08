import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let numero = []

    for (let i = 0; i < limit; i++) {
        let num = Number(ler())
        numero.push(num)
    }

    console.log("Você digitou os números:")
    for (let n of numero) {
        console.log(n)
    }

    console.log("Os números pares são:")
    for (let i = 0; i < limit; i++) {
        let item = numero[i]

        if (item % 2) {

        }

        else {
            console.log(item)
        }
    }
}