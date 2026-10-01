//////////////////////                Parte 1 Matriz com as notas de 4 alunos (3 notas cada)
let notas = [
    [8, 7, 6],
    [5, 9, 7],
    [10, 4, 8],
    [6, 7, 9]
];

let aprovadas = 0;

/////////////////////////             Percorre a matriz

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        let nota = notas[i][j];

        if (nota >= 7) {
            console.log("Nota " + nota + " -> Aprovada");
            aprovadas++;
        } else {
            console.log("Nota " + nota + " -> Abaixo da média");
        }
    }
}

//////////////////////////////////////////                    Resultado final

console.log("Total de notas aprovadas: " + aprovadas)
console.log(
    `%cStatus do Sistema\n%cTudo funcionando normalmente`,
    'font-weight: bold; color: #0dd8d8; text-decoration: underline',
    'color: #ceb73f;',
);

