let num = [7, 6, 8, 3]
num[3] = 5
num.push(0)
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('/////////////////////////')
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}