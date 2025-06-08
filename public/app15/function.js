import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let nomes = [];

    console.log("Informe um nome:")
    for (let i = 0; i < limit; i++) {
        let nome = ler();
        nomes.push(nome)
    }

    console.log(`Nomes que começam com a letra "L" e "H:`)
    for (let nome of nomes) {
        if (nome.toLowerCase().includes("l") || (nome.toLowerCase().includes("h"))) {
            console.log(nome);
        }
    }
}