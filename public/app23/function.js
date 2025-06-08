import prompt from "prompt-sync"
let ler = prompt();

export function vetor (n) {
    let mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];


if (n >= 0 && n <= 12) {
    console.log(mes[n]);
} else {
    console.log("Número inválido! Digite um número entre 0 e 6.");
}
}