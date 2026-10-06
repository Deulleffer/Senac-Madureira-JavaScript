let cpf = "152.819.427-60"; 

////if (cpf.length !== 11) {
    false
    

    

////////////    
function validarCPF(cpf) {
    
    cpf = cpf.replace(/\D/g, '');

    
    if (cpf.length !== 11) {
        return false; 
    }

    
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let primeiroDigitoCalculado = resto < 2 ? 0 : 11 - resto;

    
    if (primeiroDigitoCalculado !== parseInt(cpf.charAt(9))) {
        return false;
    }

    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let segundoDigitoCalculado = resto < 2 ? 0 : 11 - resto;

    
    if (segundoDigitoCalculado !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}



if (validarCPF(cpf)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}