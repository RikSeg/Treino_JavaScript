class Carro{
    marca;
    cor;
    eficiencia;

    constructor( marca,cor,eficiencia){
        this.marca = marca;
        this.cor = cor;
        this.eficiencia = eficiencia;
    }

    calculaCusto(valor_combustivel,distancia){
        const resultado = (parseFloat(valor_combustivel) * parseFloat(distancia) ) / parseFloat(this.eficiencia);
        console.log('O custo da viagem é:',resultado.toFixed(2));
    }
}

const kwid = new Carro('Renault', 'prata', 10);

kwid.calculaCusto(5.00,100);
