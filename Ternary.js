//* monte um programa para informar se a pessoa pode votar *\\
let idade = Number(prompt("informe a idade"));
let msg = (idade < 16) ? "não pode votar" : "pode votar";
document.write(msg);
