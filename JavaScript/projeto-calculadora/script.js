"use strict"
const result = document.querySelector('#resultado')


function inserir(valor) {

    const limite = document.querySelector('#resultado').innerText;

    if (['+', '-', '*', '/'].includes(limite.slice(-1)) && ['+', '-', '*', '/'].includes(valor)) {

        return;
    }


     document.querySelector('#resultado').innerText += valor
  
       
  
    }

    
   

function clean () {
    resultado.innerHTML = ''
    calculator.innerHTML = ''
}



function backspace () {
    if (resultado.textContent) {
        const result = document.getElementById('resultado').innerHTML

        resultado.innerHTML = result.substring(0, result.length -1)




    }
}



const igual = () => {
    if(resultado.textContent != 'Erro') {
        document.querySelector('#calculator').innerHTML = resultado.innerHTML


        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    
    
}
}


