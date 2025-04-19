/*
A entrega deste exercício consiste em:
• Criar um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
• Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
*/

const dados = [
    {nome: 'Felipe', nota: 10},
    {nome: 'Ana', nota: 7},
    {nome: 'Cristina', nota: 4},
    {nome: 'Cauã', nota: 9},
    {nome: 'Alice', nota: 10},
    {nome: 'Maicon', nota: 2},
]

function alunosAprovados(lista) {
    return lista.filter((aluno) => aluno.nota >= 6);
}

const aprovados = alunosAprovados(dados);

console.log("APROVADOS:");
aprovados.forEach((aluno) => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});