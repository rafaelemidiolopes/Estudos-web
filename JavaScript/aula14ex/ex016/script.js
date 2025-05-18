
var resposta = prompt('Seus dados estão sendo rastreados! Deseja continuar nessa página?');
while (resposta.toLowerCase() !== 'não') {
  var novaresposta = prompt('Desculpe, não entendi. Por favor digite "não" se não quiser continuar.');
  if (novaresposta.toLowerCase() === 'não') {
    alert('Tarde demais, seus dados já foram rastreados, tome mais cuidado com páginas que você não conhece! Baixe um antivírus para ter mais segurança.');
  } else {
    alert('Desculpe, você precisa digitar "não" se não quiser ter seus dados rastreados.');
  }
  resposta = novaresposta;
}
alert('Você decidiu não continuar na página. Mas seus dados já foram rastreados, baixe um antivírus para ter mais segurança!');

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
       
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <=0) {
            window.alert('Passo invalído!')
        }
        if (i < f) { //contagem crescente
            for(let c = i; c <= f; c+= p) {
            res.innerHTML += `${c} \u{1F449}`
        } 
      
     } else { //contagem decrescente
            for(let c = i; c>= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }    
        res.innerHTML += `\u{1F3C1}`
    }
    }
