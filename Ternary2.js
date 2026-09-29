//* Dê um valor *\\
let valor = Number(prompt("digite um valor"));
let msg = (valor > 10) ? "Maior do que 10" : (valor < 10) ?
    "menor do que 10" : "igual a 10";
    document.write(msg);