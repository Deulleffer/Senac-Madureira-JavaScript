//* ler um valor para informar se o numero é impar ou par *\\
let valor = Number(prompt("Informe o Valor?"))
let texto = (valor % 2) == 0 ? "valor par" : "valor impar"
document.write(texto);