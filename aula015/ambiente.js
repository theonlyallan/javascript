let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Nosso vetor é o ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}



