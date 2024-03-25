function contar() {
    let in1 = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (in1.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Verifique seus dados.'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(in1.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F9D0}	`
            }

        } else {
            // Contagem regressiva
            for (c = i; c >= f; c - + p) {
                res.innerHTML += ` ${c} \u{1F9D0}	`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}