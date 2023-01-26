function gerar(){
    var numero = document.getElementById('num')
    var res = document.getElementById('res')
    if(numero.value.length == 0){
        window.alert('Preencha o campo "Numero:"')
    }else {
        var mult = 0
        var num = Number(numero.value)
        res.innerHTML = ''
        for(mult; mult<=10;mult++){
            let item  = document.createElement('option')
         item.text += ` ${num} x ${mult} = ${num*mult}`
         res.appendChild(item)
        }
}
}