let cursos = ["Python", "Java", "C++", "Linux", "Ruby"]
console.log(cursos)


cursos.push("Html")
cursos.push("Windows")
cursos.push("Office");

console.log(cursos);
console.log(cursos.length);
console.log(cursos[0], cursos[3]);


let frequencias = [90, 65, 80, 50, 100, 72, 85]
let qtd = 0

for (let index = 0; index < frequencias.length; index++) {
    const element = frequencias[index];
    
    if (element>=75) { 
        qtd++
    }

}

console.log("A quantidade de notas superior ou igual a 75 foi:" + qtd);

