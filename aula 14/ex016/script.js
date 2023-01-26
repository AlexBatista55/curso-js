function contar(){
   let ini = document.getElementById('inicial')  
   let fi= document.getElementById('fim')
   let pa = document.getElementById('passo1')
   let msg = document.getElementById('msg')

   if(ini.value.length == 0 || fi.value.length == 0 || pa.value.length ==0){
       window.alert('[ERRO] Faltam dados!')
   } else{
    msg.innerHTML = 'Contando:'   
    var i = Number(ini.value)
    var f = Number(fi.value)
    var p = Number(pa.value)

    if(i < f){  
        
        for(let c = i; c <= f; c += p){
            msg.innerHTML += ` ${c} &#x1F449`
        }
    } else {
        for(let c = i; c > f; c -= p){
            msg.innerHTML += ` ${c} &#x1F449`
        }
    }
    msg.innerHTML += '&#x1F3C1'
    }
}
