/*console.log('digite um número')
var numS = '2'
let num = Number (numS)
for (i=1; i<=10; i++) {
    let res = num * i 
    console.log (`${num} x ${i} dá ${res}`)
} */

let gols = 0

QTDgols = gols || '"ERRO: nenhum gol cadastrado"'  // 1)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

console.log('')

QTDgols = gols ?? '"ERRO: nenhum gol cadastrado"'  // 2)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)