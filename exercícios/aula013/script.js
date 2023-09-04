function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('Imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 8 && hora < 12) {
img.scr = "noite01"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE !
    } else {
        // BOA NOITE
    }
}