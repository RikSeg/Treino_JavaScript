
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

//console.log(pessoa);

//pessoa.descrever();

//Criando uma Classe

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    altura;

    //método construtor
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
        this.altura = altura
    }

    //método da classe
    descrever() {
        console.log('meu nome é', this.nome, 'tenho',this.idade,'anos e tenho',this.altura, 'de altura' )
    }


}

//nova instância da classe

const vitor = new Pessoa('Vitor', 26, 1.76);

const renan = new Pessoa('Renan', 30, 1.68);

//chamando métodos da classe através dos objetos
//vitor.descrever();
//renan.descrever();

//console.log(vitor);

//Função recebendo Objetos

function comparaPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(p1.nome,'é mais velho(a) que', p2.nome);
    } else if(p1.idade < p2.idade){
        console.log(p2.nome,'é mais velho(a) que', p1.nome);
    }else {
        console.log(p1.nome,'tem a mesma idade que', p2.nome);
    }
    console.log('e também');
    if (p1.altura > p2.altura){
        console.log(p1.nome,'é mais alto(a) que', p2.nome);
    }else if(p1.altura > p2.altura){
        console.log(p2.nome,'é mais alto(a) que', p1.nome);
    }else {
        console.log(p2.nome,'tem a mesma altura que', p1.nome);
    }
}

//uso da função

comparaPessoas(vitor,renan);