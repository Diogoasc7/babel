class Pokemon {
    #hp = 100; //Encapsulamento (propriedade privada)

    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

// 🧬 Herança
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico');
    }

    //🌀 Polimorfismo — sobrescrevendo o método atacar()
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

// 🧪 Testando tudo:
const pikachu = new Pikachu();
const charmander = new Charmander();

pikachu.atacar();        // Polimorfismo
charmander.atacar();     // Polimorfismo

pikachu.receberDano(30); // Encapsulamento: diminui HP internamente
pikachu.exibirHp();      // Mostra HP atual

console.log(pikachu.hp); // undefined (não acessa #hp diretamente)

/*
1. Encapsulamento
📌 O que é?
É o conceito de ocultar os detalhes internos de um objeto e controlar o acesso aos seus dados, permitindo que você proteja as informações sensíveis de serem alteradas diretamente.

🧠 Por que usar?
Segurança: impede alterações indesejadas nos dados.
Organização: separa a interface pública da lógica interna.
Facilidade de manutenção.

2. Herança
📌 O que é?
É o conceito de reutilizar código de uma classe base (ou "pai") criando uma nova classe (filha) que herda os atributos e métodos dela.

🧠 Por que usar?
Reaproveitamento de código.
Organização hierárquica.
Facilita a extensão de funcionalidades.

3. Polimorfismo
📌 O que é?
É a capacidade de um mesmo método se comportar de formas diferentes, dependendo do objeto que o invoca.

🧠 Por que usar?
Flexibilidade no código.
Permite tratar objetos diferentes de maneira uniforme.
*/