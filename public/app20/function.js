import prompt from "prompt-sync"
let ler = prompt();

export function vetor(limit) {
    let notas = [];
    let soma = 0;

    console.log("Informe a nota do aluno:")
    for (let i = 0; i < limit; i++) {
        let n = Number(ler())
        notas.push(n)
        soma += n;
    }

    let media = soma / limit;

    for (let i = 0; i < 1; i++) {
        if (media >= 5) {
            console.log("Todos os alunos passaram")
        }

        else {
            console.log("Nem todos passaram")
        }
    }
}