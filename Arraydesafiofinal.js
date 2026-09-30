function ocuparVaga(andar, vaga) {
    if (andar < 0 || andar >= estacionamento.length || vaga < 0 || vaga >= estacionamento[andar].length) {
        console.log("Posição inválida!");
        return;
    }
    if (estacionamento[andar][vaga]) {
        console.log(`Vaga ${vaga} no andar ${andar} já está ocupada.`);
    } else {
        estacionamento[andar][vaga] = true;
        console.log(`Vaga ${vaga} no andar ${andar} ocupada com sucesso.`);