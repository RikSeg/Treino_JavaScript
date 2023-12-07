/*Faça um programa para calcular o valor de uma viagem
  
Você terá 3 variáveis. Sendo elas:
1-Preço de combustível;
2-Gasto médio de combustível do carro por km;
3-Distãncia em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

//Interface de I/O:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
//

//Formula de cálculo de consumo:
  function formula(valor_combustivel,eficiencia,distancia){
    const resultado = (parseFloat(valor_combustivel) * parseFloat(distancia) ) / parseFloat(eficiencia);
    console.log('O custo da viagem é:',resultado);
  }
//

//função de input:
 function le_parametros(){
    readline.question('Insira o valor do combustível:',valor_combustivel => {
        readline.question('Insira o valor do consumo:',eficiencia => {
            readline.question('Insira a distância:',distancia => {
                formula(valor_combustivel,eficiencia,distancia);
                
                readline.close();
            });
        });
    });
}
//


//fluxo principal
le_parametros();
  


