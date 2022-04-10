const MIparaKM = document.getElementById('MIparaKM')
const KMparaMI = document.getElementById('KMparaMI')
const txtresultado = document.getElementById('txtresultado')

var resultado = 0
var tipo = 0

valor1.addEventListener('change', calcular)
//↑ CONFIGURAÇÕES ↑

function MetodoMIparaKM() {
    tipo = 1
    document.getElementById('valor1').disabled = ''
    KMparaMI.style.backgroundColor = 'var(--cor4)'
    KMparaMI.classList.add('seletorTipoConversãoDesativado')
    MIparaKM.classList.remove('seletorTipoConversãoDesativado')
    MIparaKM.style.backgroundColor = 'var(--corbotão)'
    document.getElementById('valor1').style.display = 'block'
}

function MetodoKMparaMI() {
    tipo = 2
    document.getElementById('valor1').disabled = ''
    MIparaKM.style.backgroundColor = 'var(--cor4)'
    MIparaKM.classList.add('seletorTipoConversãoDesativado')
    KMparaMI.classList.remove('seletorTipoConversãoDesativado')
    KMparaMI.style.backgroundColor = 'var(--corbotão)'
    document.getElementById('valor1').style.display = 'block'
}

function calcular() {
    var valor1 = document.getElementById('valor1')
    var distancia = Number(valor1.value)
    if (tipo == 1) {
        resultado = (distancia * 1.609).toFixed(2)
        txtresultado.innerText = `${resultado} Km`
        txtresultado.style.display = 'block'
    } else {
        resultado = (distancia / 1.609).toFixed(2)
        txtresultado.innerText = `${resultado} Mi`
        txtresultado.style.display = 'block'
    }
}

KMparaMI.addEventListener('click', calcular)
MIparaKM.addEventListener('click', calcular)