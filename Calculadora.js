let valor1 = Number(prompt("Digite o primeiro valor"));
let calculo = Number(prompt("Digite o tipo de operação: 1 -Soma 2 -Subtração -3 Divisão 4-Multiplicação"))
let valor2 = Number(prompt("Digite o segundo valor"))
if (calculo == 1) {
    soma = (valor1 + valor2);
    document.write("O Valor é " + soma)
} 
if (calculo == 2) {
    soma = (valor1 - valor2);
    document.write("O valor é " + soma)
}
if (calculo == 3) {
    soma = (valor1 / valor2);
    document.write("O valor é " + soma)
}
if (calculo == 4) {
    soma = (valor1 * valor2);
    document.write("O valor é " + soma)
}