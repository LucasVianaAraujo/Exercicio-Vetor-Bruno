import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let notas = [];

    console.log("Informe um número:")
    for (let i = 0; i < limit; i++) {
        let n = Number(ler());
        notas.push(n);
    }

    console.log("Notas digitadas:")
    for (let n of notas) {
        console.log(n)
    }

    let nota = Math.min(...notas)

    console.log("A menor nota é:")
    if (notas.includes(nota)) {
        console.log(nota)
    }
}