"use strict"
const func = (console) => {
    console.log('Olá, mundo!')
}

const callback = () => {
    func(console)
}
var idade = 19
callback();
if (idade < 18) { 
(function() {
console.log('Vc é de menor')
})() } else {
    (function() {
console.log('Vc é de maior')
})() 

}



let res = 1

while (res <= 30){
     console.log(res)
    res++
   
}

var n1 = Number(10)
var n2 = Number(22)
var s = n1 + n2
console.log(`a soma entre ${n1} e ${n2} é igual a ${s}`)
let txt = 'Olá mundo!'
txt = txt.toUpperCase()
console.log(txt)

const cid = 'Itaquaqueseutoba'

console.log(cid)


let teste = 'Teste'
teste.toUpperCase()
console.log(teste)

var num1 = 10
var num2 = 20
var resultado = num1 + num2
console.log(resultado)



let can = 'Caneta azul, azul caneta, caneta azul tpá marcada com a minha letraaa!'
let result = can.replace(/caneta/gi,"lápis")
console.log(result)

let text = "Você está estudando JavaScript"
console.log(text.split(" ",2))



let gols = 0

QTDgols = gols || '"ERRO: nenhum gol cadastrado"'  // 1)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

console.log('')

QTDgols = gols ?? '"ERRO: nenhum gol cadastrado"'  // 2)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)
