function calcular() {
    let txtv = window.document.getElementById('txtvel');
    let vel = Number(txtv.value);
    let res = window.document.getElementById('res');
    res.innerHTML = `<p>Sua velocidade atual é <strong>${vel}Km/h</strong></p>`;


    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>`;
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}