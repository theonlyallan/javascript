let valores = [8, 1, 7, 4, 2, 9, 12, 32, 43, 65, 139, 234, 1201]


/* for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/

for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}