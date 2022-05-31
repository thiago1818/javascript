

function carregar() {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = "manha.png"
        msg2.innerHTML = 'Bom Dia!!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = "tarde.png"
        msg2.innerHTML = 'Boa Tarde!!'
        document.body.style.background = '#b9846f'
    } else {
        img.src = "noite.png"
        msg2.innerHTML = 'Bom Noite!!'
        document.body.style.background = '#515154'
    }
}
