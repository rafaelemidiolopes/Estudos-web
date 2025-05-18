function myBio(firstName, lastName, ...otherInfos) { 
    return otherInfos;
}

console.log(myBio("Elon", "Musk", "Male", "Tesla", "SpaceX", "blablabla"))




// O parâmetro  ...otherInfo  é um Rest Parameter que pode guardar uma quantidade INFINITA de ARGUMENTOS.

function myBio(firstName, lastName, ...otherInfos) { 
    return otherInfos;
}

console.log(myBio("Elon", "Musk", "Male", "Tesla", "SpaceX", "blablabla"))

console.log('----------')




function sum(...nums) {
    let total = 0



    for (let x of nums) {
        total += x
    }


   
    return total
}



console.log(sum(11, 22, 33, 44, 55, 66, 77, 88, 99))



const pessoa= (...info) => {
return info
}
console.log(pessoa('Rafael', '16 anos', 'dev' ))



function puro(a, b) {
    console.log(a + b)
}
console.log(puro(1,2))