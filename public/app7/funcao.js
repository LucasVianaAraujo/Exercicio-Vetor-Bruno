import prompt from "prompt-sync"
let ler = prompt();

export function vetor(clone, limit) {
    let repeat = [];

    for (let i = 0; i < limit; i++) {
        let n = limit
        repeat.push(n)
    }

    console.log("Os ingressos gerados foram:")
    for (let i = 0; i < limit; i++) {
        let item = repeat[i]
        console.log(clone + (i + 1))
    }
}