function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `${genero}, ${idade} anos <br><br>`
        resultado.appendChild(img)
    }
}
