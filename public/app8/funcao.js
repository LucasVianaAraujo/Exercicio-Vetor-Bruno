import prompt from "prompt-sync"
let ler = prompt();

export function vetor(qtd) {
    let random = []

    for (let i = 0; i < qtd; i++) {
        let num = parseInt(Math.random() * 100);
        console.log(num)
    }
}