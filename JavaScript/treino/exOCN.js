let gols = null

QTDgols = gols || '"ERRO: nenhum gol cadastrado"'  // 1)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)

console.log('')

QTDgols = gols ?? '"ERRO: nenhum gol cadastrado"'  // 2)
console.log(`Marrocos venceu a Espanha por 4 x ${QTDgols}`)