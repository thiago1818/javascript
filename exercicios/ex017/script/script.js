function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabuada')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
}
