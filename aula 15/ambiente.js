let num =[5,8,4,9,3]
num.push(1)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor te ${num.length} posições`)
console.log(` O primeiro valor do vetor é ${num[0]}`)
let pos =num.indexOf(10)
if(pos ==-1){
    console.log (`O valor não foi encontrado`)
}else{
console.log (`O valor está em ${pos}`)
}