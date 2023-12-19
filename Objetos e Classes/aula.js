
//definindo um objeto:
const pessoa = {
    nome: 'Manuel',
    idade: 20,
    descrever: function (){
        console.log('meu nome é', this.nome, 'e tenho',this.idade,'anos')
    }
}

//adicionando um novo chave-valor ao objeto
pessoa.altura = 1.69;

console.log(pessoa);

pessoa.descrever();

//Criando uma Classe

class Pessoa {
    nome;
    idade;
    //método construtor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //método da classe
    descrever() {
        console.log('meu nome é', this.nome, 'e tenho',this.idade,'anos')
    }


}

//nova instância da classe

const vitor = new Pessoa('Vitor', 25);

const renan = new Pessoa('Renan', 23);


vitor.descrever();
renan.descrever();