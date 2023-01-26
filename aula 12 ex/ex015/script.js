function verificar() {
var res = document.querySelector('input#anonas')
var data = new Date
var dataAtual= data.getFullYear()
var ano =  Number(res.value)
var idade = dataAtual - ano
var sexo = document.getElementsByName('sexo')
var msg = document.querySelector('div#msg')
var img = document.getElementById('imagem')


if (idade > 0 && idade <=5 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem0.png'
}else if (idade >5 && idade <=12 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem5.png'
}else if (idade >12 && idade <=20 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem12.png'
}else if (idade >20 && idade <=30 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem20.png'
}else if (idade >30 && idade <=40 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem30.png'
}else if (idade >40 && idade <=50 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem40.png'
}else if (idade >50 && idade <=60 && sexo[0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem50.png'
}else if (idade >60 && sexo [0].checked){
    msg.innerHTML = `Detectamos Homem com ${idade} anos`
    img.src = 'homem60.png'
}else if(idade > 0 && idade <=5 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher0.png'
}else if(idade > 5 && idade <=12 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher5.png'
}else if(idade > 12 && idade <=20 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher12.png'
} else if(idade > 20 && idade <=30 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher20.png'    
}else if(idade > 30 && idade <=40 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher30.png'
}else if(idade > 40 && idade <=50 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher40.png'    
}else if(idade > 50 && idade <60 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher50.png'   
}else if(idade > 60 && sexo[1].checked){
    msg.innerHTML = `Detectamos Mulher com ${idade} anos`
    img.src = 'mulher60.png'    
}else{
    msg.innerHTML = '[ERRO].Paramentos inexistentes, confira e tente novamente'
    img.src = 'erro.png'
} 
}   