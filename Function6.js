//////////////////////////////////////////////////Aula 9 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


function mensagemLogin() {
    return "Informe seus dados de acesso";
}


console.log(mensagemLogin());


function dadosUsuario(nome, setor) {
    return "Nome: " + nome + " | Setor: " + setor;
}


console.log(dadosUsuario("Ana Beatriz  ", "| Recursos Humanos "));
console.log(dadosUsuario("Jonathan", "| Professor"));
console.log(dadosUsuario("Pedro Henrique", "| Segurança"));


function verificarAcesso(idade) {
    if (idade >= 18) {
        return "Acesso Permitido"

    }
    else { return "Acesso não permitido" }

}

console.log(verificarAcesso(40));
console.log(verificarAcesso(31));
console.log(verificarAcesso(13));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

