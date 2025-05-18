// Combinando os ELEMENTOS de 2 ARRAYS distintos dentro de um único ARRAY:
const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]
const numerosCombinados = [...numeros1, ...numeros2]
console.log(numerosCombinados)

//console.log('--------------------')

// COPIANDO PARTES do ARRAY  numerosCombinados  , ao transformar SEUS ELEMENTOS em VARIÁVEIS dentro de um NOVO ARRAY:
const [um, dois, ...resto] = numerosCombinados
console.log(um)
console.log(dois)
console.log(resto)
