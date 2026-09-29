//* Ler o codigo do produto de 1 até 4 e informar o preço do produto*\\
let codigo = Number(prompt("Informe o codigo do produto"))
switch (codigo) {
    case 1:
        document.write("café R$5,00");
        break
    case 2:
        document.write("Leite R$8,00");
        break
    case 3:
        document.write("Pão na chapa R$7,00");
        break
    case 4:
        document.write("Bolo Formigueiro R$15,00");
        break
    default:
        document.write("Codigo inválido");
}