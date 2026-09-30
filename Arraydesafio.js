
let estacionamento = Array.from({ length: 3 }, () => Array(5).fill(false));

// Parte 1 //////////////////////  Um estacionamento possui 3 andares.​
function mostrarEstacionamento() {
    console.log("Estado do estacionamento:");
    estacionamento.forEach((andar, i) => {
        console.log(`Andar ${i + 1}:`, andar.map(vaga => vaga ? "Ocupada" : "Livre").join(" | "));
    });
}

// Parte 2 ////////////////////  Cada andar possui 5 vagas.​
function ocuparVaga(andar, vaga) {
    if (!estacionamento[andar][vaga]) {
        estacionamento[andar][vaga] = true;
        console.log(` Vaga ${vaga + 1} no andar ${andar + 1} ocupada.`);
    } else {
        console.log(` Vaga ${vaga + 1} no andar ${andar + 1} já está ocupada.`);
    }
}

// Parte 3 /////////////////// O sistema precisa representar vagas ocupadas e livres.​
function liberarVaga(andar, vaga) {
    if (estacionamento[andar][vaga]) {
        estacionamento[andar][vaga] = false;
        console.log(` Vaga ${vaga + 1} no andar ${andar + 1} liberada.`);
    } else {
        console.log(` Vaga ${vaga + 1} no andar ${andar + 1} já está livre.`);
    }
}

mostrarEstacionamento();
ocuparVaga(0, 2);
ocuparVaga(1, 4);
mostrarEstacionamento();
liberarVaga(0, 2);
mostrarEstacionamento();

console.table(estacionamento)


//////////// 
