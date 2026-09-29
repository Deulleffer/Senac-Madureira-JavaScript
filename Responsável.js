let idade = Number(prompt("Digite a idade"));
let responsavel = prompt("Está acompanhado de um responsável legal? sim ou não:").toLowerCase();
if (idade >= 18 || (idade >= 16 && idade < 17 && responsavel == "sim")) { document.write("podecomprar bebidas") };
else {
    document.write("Não pode comprar Bebidas");
}
