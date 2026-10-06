let cpf = "15715935821"


if (cpf.length != 11) {
   return false
}


let soma = 0;
for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
}
let resto = soma % 11;
let primeiroDigito = resto < 2 ? 0 : 11 - resto;
    
    
if (validarCPF(cpf)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}


console.log(cpf)