import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let numeros = [];
    let soma = 0;

    console.log("Informe os números:");
    for (let i = 0; i < limit; i++) {
        let n = Number(ler());
        numeros.push(n);
        soma += n;
    }

    console.log("Notas digitadas:");
    for (let n of numeros) {
        console.log(n);
    }

    let media = soma / limit;

    console.log("A média é:");
    console.log(media.toFixed(2));

    let maximo = Math.max(...numeros)

    console.log("A maior nota é:")
    console.log(maximo)

    let minimo = Math.min(...numeros)

    console.log("A menor nota é:")
    console.log(minimo)
}