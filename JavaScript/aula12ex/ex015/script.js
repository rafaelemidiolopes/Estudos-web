function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem' 
            if (idade >=0 && idade < 10) 
            {//criança
                img.setAttribute('src', 'bebem.png')
        
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            }
            else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adultom.png')
            }
            else {
                ///idoso
                img.setAttribute('src', 'idosom.png')
            } }
            else if (fsex[1].checked) {
                genero = 'Mulher'
            if (idade >=0 && idade < 10) 
            {//criança
                img.setAttribute('src', 'bebef.png')
            } 
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemf.png')
            }
            else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'adultof.png')
            }
            else {
                ///idoso
                img.setAttribute('src', 'idosof.jpg')
            }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
            res.appendChild(img)
        }
     
    } 
