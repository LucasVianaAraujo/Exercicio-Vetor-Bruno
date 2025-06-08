import prompt from "prompt-sync"
let ler = prompt();

export function vetor() {
    let nomes = []
    for (let i = 0; i <= 5; i++) {
        let n = ler()
        nomes.push(n)
    }

    for (let item of nomes) {
        process.stdout.write(item + " ");
    }
}