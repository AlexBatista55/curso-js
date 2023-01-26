let num = 1
let opcoes = [2,3,5]
opcoes.push(num)
     if(num >= 100 ){
        window.alert('Numero maior que 100 ou ja adicionado na lista!')
    }else{
     console.log(opcoes)
   }
let soma = 0

for(i = 0; i< opcoes.length; i++){
   soma += opcoes[i]
}
console.log(soma)

