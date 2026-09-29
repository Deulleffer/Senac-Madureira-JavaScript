//* 1. Fácil — Criando e chamando uma função Em um sistema de acesso, crie uma função chamada mensagem Login que apresente a mensagem 
// “Informe seus dados de acesso”. Depois, chame a função para verificar seu funcionamento.

///////////////////////////////////////////////////////////Aula 9 ////////////////////////////////////////


function mensagemLogin() {
    return "Informe seus dados de acesso";
}

console.log(mensagemLogin());



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Fácil–médio — Função com parâmetros e retorno
// Crie uma função que receba nome e setor. A função deverá retornar uma mensagem com os dois
// dados. Teste a função com pelo menos três valores diferentes e apresente os resultados




function dadosUsuario(nome, setor) {
    return "Nome: " + nome + " | Setor: " + setor;
}

console.log(dadosUsuario("Ana", "Financeiro"));
console.log(dadosUsuario("Carlos", "Tecnologia"));
console.log(dadosUsuario("Mariana", "Recursos Humanos"));




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Médio — Função com regra de decisão
// Crie uma função que analise idade. Quando o valor for igual ou superior a 18, a função deverá retornar
// “Acesso permitido”; caso contrário, deverá retornar “Acesso não permitido”. Faça diferentes chamadas
// para testar as duas possibilidades.



function verificarAcesso(idade) {
    if (idade >= 18) {
        return "Acesso permitido";
    } else {
        return "Acesso não permitido";
    }
}

console.log(verificarAcesso(20));
console.log(verificarAcesso(17));
console.log(verificarAcesso(18));
console.log(verificarAcesso(15));