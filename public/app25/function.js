import prompt from "prompt-sync"
let ler = prompt();

export function vetor(nome, limit, meta) {
    let doacoes = [];
    let soma = 0;
    
    console.log("Informe as doações recebidas:");
    for (let i = 0; i < limit; i++) {
        let n = Number(ler());
        doacoes.push(n);
        soma += n;
    }
    
    console.log(`O projeto ${nome} recebeu ${doacoes.length} doações, totalizando ${soma} reais.`);
    console.log();
    
    console.log("As doações recebidas foram:")
    for (let n of doacoes) {
        console.log()
        console.log(n)
        console.log()
    }
    
    let maximo = Math.max(...doacoes)
    console.log("A maior doação foi: " + maximo)

    if (soma >= meta) {
        console.log("A meta foi atingida!");
    } else {
        console.log("A meta não foi atingida.");
    }
}