import prompt from "prompt-sync"
let ler = prompt();

export function vetor (limit) {
    let posicao = []
let chegada = []
let nomes = []

console.log("Informe as posições iniciais")
for (let i = 0; i < limit; i++) {
    let pos = Number(ler())
    posicao.push(pos)
}

console.log("Informe a chegada")
for (let i = 0; i < limit; i++) {
    let che = Number(ler())
    chegada.push(che)
}

for (let i = 0; i < limit; i++) {
    let inicial = posicao[i];
    let final = chegada[i];

    if (inicial > final) {
        console.log(`O piloto: ${inicial} perdeu ${inicial - final} posições.`);
    } else if (inicial < final) {
        console.log(`O piloto: ${inicial} avançou ${final - inicial} posições.`);
    } else if (inicial = inicial) {
        console.log(`O piloto: ${inicial} manteve sua posição.`);
    }
}
}