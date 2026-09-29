let idade = Number(prompt("Digite sua Idade"));
if (idade < 0) {
    document.write("Idade Inválida!");
}
else if (idade <= 11) {
    document.write("Criança");
} else if (idade <= 17) {
    document.write("Adolescente");
} else if (idade <= 59) {
    document.write("adulto");
} else {
    document.write("idoso");
}

