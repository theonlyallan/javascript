function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png.png"
        document.body.style.background = '#EDC79B'
        msg.innerHTML = `Bom dia !`
    } else if (hora >= 12 && hora < 18) {
        img.src = "fototarde.png.png"
        document.body.style.background = '#A6B1BB'
        msg.innerHTML = `Boa Tarde !`

    } else {
        img.src = "fotonoite.png.png"
        document.body.style.background = '#0E162F'
        msg.innerHTML = `Bom Noite !`

    }
}