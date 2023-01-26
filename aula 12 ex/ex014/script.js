function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()



if(hora >= 0 && hora < 12){
  msg.innerHTML = `Bom dia!! Agora são ${hora} horas e ${minuto} minutos!`
  img.src = 'fotomanha.png'
  document.body.style.background = '#e2cf9f'

    } else if(hora >=12 && hora < 18){
        msg.innerHTML = ` Boa Tarde! Agora são ${hora} horas e ${minuto} minutos!`
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else {
        msg.innerHTML = `Boa Noite! Agora são ${hora} horas e ${minuto} minutos!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }

}
