import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let numero = [];
    let soma = 0;

    console.log("Informe um número:");
    for (let i = 0; i < limit; i++) {
        let n = Number(ler());
        numero.push(n);
        soma += n;
    }

    let media = soma / limit;

    console.log("Notas digitadas:")
    for (let n of numero) {
        console.log(n)
    }

    console.log("A média é:");
    console.log(media);
}