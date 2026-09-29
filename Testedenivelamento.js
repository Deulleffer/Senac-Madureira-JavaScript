
// 1

let nome = prompt("Coloque o Nome do cliente");
let equipamentos = prompt("Coloque o nome dos produtos");
let valorobra = Number(prompt("Digite do Valor da mão de obra"));
let valorpecas = Number(prompt("Digite o Valor das peças"));
let resultado = (valorobra + valorpecas);


// 2 
if (resultado < 200) {
    document.write("Orçamento de baixo valor ");
} else if (resultado >= 500) {
    document.write("Orçamento Intermediário ");
} else {
    document.write("Orçamento de alto valor! ")
}




// 3
let condicao = Number(prompt("Coloque a situação atual do equipamento"))
switch (condicao) {
    case 1:
        document.write(" Aguardando Análise ")
        break;
    case 2:
        document.write(" Em Manutenção ")
        break;
    case 3:
        document.write(" Aguardando Peça ")
        break;
    case 4:
        document.write(" Serviço Concluido ")
        break;
    default:
        document.write(" Você digitou um numero inválido ")


}