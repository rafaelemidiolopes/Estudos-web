/*const carro = {marca:"Fiat", modelo:"500", cor: null};

console.log(carro?.tipo)  // não existe a propriedade: tipo
console.log(carro?.cor)   // a propriedade cor recebeu  null */

/*
const pessoa = {
  nome: 'João',
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
};

console.log(pessoa?.endereco?.estado); // Saída: 'SP'
console.log(pessoa?.endereco?.pais); // Saída: undefined
console.log(pessoa?.idade?.valor); // Saída: undefined




const numbers = []

for (let c = 0; c < 5; c++) {
    numbers[c] = Math.random() // numbers  recebe 5 números aleatórios entre 0 e 1.
    console.log(numbers[c])    // exibe-se cada um dos números na tela.
}



*/

let num = null
console.log(Math.random(num))

/*

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} //                                   ¹↑    ²↑          ³↑   
console.log(getRndInteger(15, 20)) */

var min = 15;
var max = 20;
var randomNumber = Math.random() * (max - min) + min;
console.log(randomNumber)





const array_1 = [2, 3, 4]
const array_2 = [1, ...array_1, 5, 6]
console.log(array_2)



const bill =  {
    idade: 11,                // {CAMADA MAIS SUPERFICIAL}
    brinquedos: {             // {OUTRO OBJETO COM
        favorito: 'Bola',     // PROPRIEDADES
        menosUsado: 'Girafa'  // ANINHADAS}
    }
}

// linha 26 const apollo = {...bill} // 
const apollo = {...bill, brinquedos: {...bill.brinquedos.favorito}} // * ignore isto por enquanto.

bill.idade = 14
// bill.brinquedos = 'Skate'

console.log(`Idade de Bill: ${bill.idade}`)
console.log(`Idade de Apollo: ${apollo.idade}`)


console.log(`Sâo iguais? ${bill.idade === apollo.idade}`) // VALOR e TIPO iguais? 


console.log(`Sâo iguais? ${bill.brinquedos.favorito === apollo.brinquedos.favorito}`) // VALOR e TIPO iguais?

console.log('--------------------')







// É possível também PASSAR ARGUMENTOS para uma FUNÇÃO utilizando o Spread Operator:
let somar = (a, b, c) => {return a + b + c} // a = 2; b = 3; c = 4.
console.log(`Resultado: ${somar(...array_1)}`)


// O Spread Operator PERMITE que se faça ALTERAÇÕES no NOVO OBJETO DENTRO da PRÓPRIA ESTRUTURA. Ex:
const sputnik = { // COPIOU-SE o OBJETO  apollo  como 'default' e SOBRESCREVEU-SE o VALOR da PROPRIEDADE  idade  .
  ...apollo,
  idade: 17,
  brinquedos: {...apollo.brinquedos, // ↑ Mesma lógica.
      favorito: 'Cadela Laika'}
}

console.log(sputnik)