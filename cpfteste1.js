// 8. Criar uma função chamada validarCPF(cpf).
function validarCPF(cpf) {
    // 1. Receber ou armazenar um CPF com 11 dígitos.
    // Remove caracteres não numéricos (pontos e traço) caso existam
    cpf = cpf.replace(/\D/g, '');

    // 2. Verificar se o CPF possui exatamente 11 números.
    if (cpf.length !== 11) {
        return false; // 9. A função deverá retornar false para CPF inválido.
    }

    // 3. Não aceitar CPFs formados por todos os dígitos iguais.
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // 4. Calcular o primeiro dígito verificador usando os 9 primeiros números.
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let primeiroDigitoCalculado = resto < 2 ? 0 : 11 - resto;

    // 5. Comparar o primeiro dígito calculado com o décimo dígito informado.
    if (primeiroDigitoCalculado !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // 6. Calcular o segundo dígito verificador usando os 10 primeiros números.
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let segundoDigitoCalculado = resto < 2 ? 0 : 11 - resto;

    // 7. Comparar o segundo dígito calculado com o último dígito informado.
    if (segundoDigitoCalculado !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // 9. A função deverá retornar true para CPF válido.
    return true;
}

// 10. O programa principal deverá chamar a função e exibir CPF válido ou CPF inválido.
const cpfTeste = "123.456.789-09"; // Substitua pelo CPF que deseja testar

if (validarCPF(cpfTeste)) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}