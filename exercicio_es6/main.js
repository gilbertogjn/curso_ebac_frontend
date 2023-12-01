const boletins = [
    {nome: 'Paulo', nota: 8},
    {nome: 'Ana', nota: 7},
    {nome: 'José', nota: 6},
    {nome: 'Maria', nota: 5},
    {nome: 'Roberto', nota: 10},
    {nome: 'Monica', nota: 5},
]

function notaMaiorOuIgual6() {
    return boletins.filter((aluno) => aluno.nota >= 6) 
}

console.log(notaMaiorOuIgual6())