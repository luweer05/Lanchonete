
const botao = document.querySelector("button")
const inputcodigo = document.getElementById("codigo")
const inputQuantidade = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")

botao.addEventListener("click", calcularQuantidade)

function calcularQuantidade() {

    const codigo = inputcodigo.valueAsNumber
    const quantidade = inputQuantidade.valueAsNumber

  

    if ( codigo = 1) {

        const total =  quantidade * 5

        paragrafoResultado.textContent =
            `Valor = ${troco.toFixed(2)}`

    } else {

        const total = quantidade - 5

        paragrafoResultado.textContent =
            `DINHEIRO INSUFICIENTE. FALTAM ${falta.toFixed(2)} REAIS`
    }
}