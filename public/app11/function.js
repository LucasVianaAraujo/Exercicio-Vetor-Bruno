import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let numeros = [];
    let numeros1 = [];
    let awnser = [];

    console.log("Primeiro vetor:")
    for (let i = 0; i < limit; i++) {
        let num = Number(ler())
        numeros.push(num)
    }

    console.log("Primeiro vetor:")
    for (let i = 0; i < limit; i++) {
        let num1 = Number(ler())
        numeros1.push(num1)
    }

    for (let i = 0; i < limit; i++) {
        let total = (numeros[i] + numeros1[i])
        awnser.push(total)
    }

    console.log("Primeiro vetor:")
    for (let item of numeros) {
        console.log(item)
    }

    console.log("Segundo vetor:")
    for (let item of numeros1) {
        console.log(item)
    }

    console.log("A soma dos vetores, resulta no terceiro:")
    for (let item of awnser) {
        console.log(item)
    }
}