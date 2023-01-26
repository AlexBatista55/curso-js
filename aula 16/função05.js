function recursividade(num){
    if (num == 1){
        return 1
    }else{
        return num * recursividade(num-1)
    }
}
console.log (recursividade(5))