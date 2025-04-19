/*
O que é Map?
Map é uma estrutura de dados do JavaScript que armazena pares de chave e valor, onde as chaves podem ser de qualquer tipo (inclusive objetos, funções, etc).
Funcionalidades principais:
Armazenar dados com uma chave única.
A ordem de inserção dos itens é mantida.
Permite acessar, adicionar, verificar, deletar e iterar valores com métodos próprios.

Métodos utilizados:
Método -> Função
set(chave, valor) -> Adiciona ou atualiza um item no Map.
get(chave) -> Retorna o valor associado à chave.
size -> Retorna o número de pares chave-valor.
has(chave) -> Verifica se existe uma chave no Map.
delete(chave) -> Remove um item pela chave.
clear() -> Remove todos os itens do Map.
keys() -> Retorna um iterador com as chaves.
values() -> Retorna um iterador com os valores.
entries() -> Retorna um iterador com os pares [chave, valor].


O que é Set?
Set é uma estrutura de dados que armazena valores únicos. Ele não permite elementos duplicados.
Funcionalidades principais:
Armazena apenas valores únicos.
Também mantém a ordem de inserção.
Ideal para eliminar duplicatas de arrays, por exemplo.

Métodos utilizados:
Método -> Função
add(valor) -> Adiciona um valor ao Set.
delete(valor) -> Remove um valor do Set.
has(valor) -> Verifica se o valor existe no Set.
clear() -> Remove todos os itens do Set.
keys() -> Retorna um iterador com os valores (igual values() em Set).
values() -> Retorna um iterador com os valores.
forEach() -> Itera sobre os valores.

*/

let meuMap = new Map();
meuMap.set('nome', 'gian');
meuMap.set('stack', 'html, css, js');

console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has('sobrenome'))

// meuMap.clear();

console.log(meuMap.size);

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');

console.log(meuMap);
// [nome => gian]
// [stack => html, css, js]

const cpfs = new Set();

cpfs.add('12457895215');
cpfs.add('17821469873');
cpfs.add('25794113659');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Diogo Costa', 'Felipe Melo', 'Sandra Cristina', 'Luana', 'Luana', 'Diogo Costa']

const arrayComSet = new Set([...array]);
const arrayItensDuplicados = [...arrayComSet];

console.log(arrayComSet);
console.log(arrayItensDuplicados);
