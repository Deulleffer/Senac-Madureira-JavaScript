let valor = Number(prompt("digite a velocidade"));

if (valor < 80) {
    document.write("Velocidade permitida!");
} else if (valor > 100) {
    document.write("Infração grave");
} else  {
    document.write("Velocidade acima do permitido. ")
}