let num = document.getElementById('textn')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []


function inNumero(n){
  if(Number(n)>=1 &&  Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}
function adicionar(){

     if(inNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text  =`Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
     }else{
       window.alert('valor invalido ou ja encontrado na lista.')
     }
     num.value = ''
     num.focus()
    }       
    function finalizar(){
      if(valores.lenght == 0){
        window.alert('Adicione valores ates de finalizar!')
      }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(pos in valores){
          soma += valores[pos]
          if(valores[pos]> maior)
            maior = valores[pos]
          if (valores[pos]< menor)
            menor = valores[pos]  
          }
          media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todos, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior numero cadastrado é o ${maior}`
        res.innerHTML += `<p> O menor numero cadastrado é o ${menor}`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}`
        res.innerHTML += `<p> A media de todos os valores é ${media}</p>`
      }
    }