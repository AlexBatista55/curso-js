
var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem){
    case 0:
        console.log ('Domingo')
        break
    case 1:
        console.log ('Segunda')
        break    
    case 2:
        console.log ('Terça')
        break
    case 3: 
        console.log ('Quarta')
        break
    case 4:
        console.log ('Quinta')
        break
    case 5:
        console.log ('Sexta')
        break    
    case 6:
        console.log ('Sabado') 
        break   
    default:
        console.log ('[Erro] data invalida')
        break
}

var momento = new Date()
var hora = momento.getHours()



if(hora >= 06 && hora < 12){
    console.log ('Bom dia!')
}else if(hora >= 12 && hora < 18){
    console.log ( 'Boa tarde!')
}else if(hora >=18 && hora < 24){
    console.log ('Boa noite!')
}else{
    console.log ('Boa Madrugada!')
}

