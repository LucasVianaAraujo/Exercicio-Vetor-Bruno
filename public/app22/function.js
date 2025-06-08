import prompt from "prompt-sync"
let ler = prompt();

export function vetor(n) {
    let diasemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    if (n >= 0 && n <= 6) {
        console.log(diasemana[n]);
    } else {
        console.log("Número inválido! Digite um número entre 0 e 6.");
    }
}