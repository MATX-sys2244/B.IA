/*Adivinhador de número

Nesse algoritmo o principal objetivo é pensar em um número entre 1 e 100, e a própria IA deve tentar adivinhar esse número.
O usuário deve informar se o número é maior ou menor clicando nos botões.
*/


/* Precisamos criar as seguintes funcionalidades para o algoritmo:

1) Gerar um número aleatório entre 1 e 100,
2) Armazenar os números já gerados,
3) Função que informa que o número gerado é maior que o anterior,
4) Função que informa que o número gerado é menor que o anterior,
5) Função que verifica se o número gerado é igual ao anterior.

*/

//Primeiro passo é gerar um número aleatório entre 1 e 100
let numero = Math.floor(Math.random() * 100) + 1;

//Função que informa que o número gerado é maior que o anterior

/* let BtnMaior = document.getElementById("MaiorNumber"); 

BtnMaior.addEventListener("click", function(){
    let numero = Math.floor(Math.random() * 100) + 1;
    alert("O número gerado é: " + numero);
}) */