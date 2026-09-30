//////////////////////// Matriz com as notas dos alunos Aula Senac
let notas = [
    [8, 7],
    [5, 6],
    [9, 8]
    ];
    
    
    console.log("Nota do Aluno 1 na prova 2:", notas[0][1]);
    
    
    console.log("Todas as notas:");
    for (let i = 0; i < notas.length; i++) {
    console.log("Aluno " + (i + 1) + ": " + notas[i]);
    }
    
    
    console.log("Alunos aprovados:");
    for (let i = 0; i < notas.length; i++) {
    let media = (notas[i][0] + notas[i][1]) / 2;
    
    if (media >= 7) {
    console.log("Aluno " + (i + 1) + " aprovado. Média: " + media);
    }
    }