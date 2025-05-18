"strict mode"
// Array original
const numeros = [1, 2, 3, 4, 5];

// Função para multiplicar cada elemento por 2
const dobrar = numeros => numeros * 2;

// Usando o método map() para criar um novo array com os valores dobrados
const numerosDobrados = numeros.map(dobrar);

console.log(numerosDobrados);
// Saída: [2, 4, 6, 8, 10]



// Array original
const nomees = ['Maria', 'João', 'Ana', 'Pedro'];

// Função para adicionar um prefixo a cada nome
const adicionarPrefixo = nomees => 'Sr. ' + nomees;

// Usando o método map() para criar um novo array com os nomes modificados
const nomesComPrefixo = nomees.map(adicionarPrefixo);

console.log(nomesComPrefixo);
/*[
    'Sr. Maria,João,Ana,Pedro',
    'Sr. Maria,João,Ana,Pedro',
    'Sr. Maria,João,Ana,Pedro',
    'Sr. Maria,João,Ana,Pedro'
  ]*/

  const nomes = ['Maria', 'João', 'Ana', 'Pedro']; 
  const nomecomM = nomes => nomes.startsWith('M')
  const Maria = nomes.filter(nomecomM)
  console.log(Maria)

  /*const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur);

console.log(sum);*/
// Saída: 15

// acc: acumulador (valor acumulado a cada iteração)
// cur: elemento atual do array

const numeross = [1, 2, 3, 4, 5];

const soa = numeross.reduce((meuk7, meupal) => meuk7  + meupal );

console.log(soa);
// Saída: 15


const multiplicar = a => b => a * b;

const multiplicarPor2 = multiplicar(2);
console.log(multiplicarPor2(5)); // Saída: 10

const multiplicarPor3 = multiplicar(3);
console.log(multiplicarPor3(4)); // Saída: 12



 
const meuModulo = require('./meumodulo');
console.log(meuModulo(5, 2)); // Saída: 3


//import { teste } from './meumodulo';
//console.log(teste(10, 2))




const frase = "Eu gosto de cachorro e gato";
const regex = /gato/;

if (regex.test(frase)) {
  console.log("Encontrei a palavra 'gato' na frase!");
} else {
  console.log("Não encontrei a palavra 'gato' na frase.");
}


