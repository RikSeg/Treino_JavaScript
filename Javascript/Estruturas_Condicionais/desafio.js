/*Faça um programa para calcular o valor de uma viagem
  
Você terá 3 variáveis. Sendo elas:
1-Preço de combustível;
2-Gasto médio de combustível do carro por km;
3-Distãncia em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const { exit } = require('process');

//Interface de I/O:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
//

const vlr_gas = 5.79;
const vlr_etan = 3.64;

//Formula de cálculo de consumo:
  function formula(tipo_comb,eficiencia,distancia){
    if(tipo_comb === "1"){
      const resultado = (parseFloat(vlr_gas) * parseFloat(distancia) ) / parseFloat(eficiencia);
      console.log('O custo da viagem é:',resultado.toFixed(2));
    }else{
      const resultado = (parseFloat(vlr_etan) * parseFloat(distancia) ) / parseFloat(eficiencia);
      console.log('O custo da viagem é:',resultado.toFixed(2));
    }
  }
//

//função de input:
 function le_parametros(){
    readline.question('Insira o tipo de combustível:\n1-gasolina\n2-etanol\n\n-> ',tipo_comb => {
      if(tipo_comb != 1 && tipo_comb != 2){
         console.log('[ERRO]:valor inválido');
         readline.close();
         return -1;
      }
        readline.question('Insira o valor do consumo:',eficiencia => {
            readline.question('Insira a distância:',distancia => {
                formula(tipo_comb,eficiencia,distancia);
                
                readline.close();
            });
        });
    });
}
//


//fluxo principal
le_parametros();
  


