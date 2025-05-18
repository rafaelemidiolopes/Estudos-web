function carregar() {
var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'manhã.jpg'
    document.body.style.background = '#f3e260'

} else if (hora >= 12 && hora < 18) {
    //Boa Tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#e1b578'
}
else { (hora >=18 && hora < 24)
    //boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#3d304d' } 

}
