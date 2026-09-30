
let = notas = [
    [7.0, 8.0, 6.0],
    [5.0, 4.0, 6.0],
    [9.0, 8.5, 10.0]
]

let = nomes = ["Ana", "Bruno", "Carla"]

aluno = 0       # Ana
disciplina = 1  # Segunda nota
print("Nota consultada:", notas[aluno][disciplina])

# Apresentar todas as notas
print("\nTodas as notas:")
for i in range(len(nomes)):
    print(nomes[i], notas[i])


# Média mínima para aprovação: 7
print("\nAlunos aprovados:")
for i in range(len(nomes)):
    media = sum(notas[i]) / len(notas[i])

    if media >= 7:
        print(nomes[i], "- Média:", round(media, 1))