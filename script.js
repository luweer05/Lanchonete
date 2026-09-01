const botao = document.querySelector("button");
const inputcodigo = document.getElementById("codigo");
const inputQuantidade = document.getElementById("quantidade");
const paragrafoResultado = document.getElementById("resultado");

botao.addEventListener("click", calcularQuantidade);

function calcularQuantidade() {

    const codigo = inputcodigo.valueAsNumber;
    const quantidade = inputQuantidade.valueAsNumber;

    let total;

    if (codigo === 1) {

        total = quantidade * 5;

        paragrafoResultado.textContent =
            `Valor = R$ ${total.toFixed(2)}`;

    } else if (codigo === 2) {

        total = quantidade * 3.5;

        paragrafoResultado.textContent =
            `Valor = R$ ${total.toFixed(2)}`;

    } else if (codigo === 3) {

        total = quantidade * 4.8;

        paragrafoResultado.textContent =
            `Valor = R$ ${total.toFixed(2)}`;

    } else if (codigo === 4) {

        total = quantidade * 8.90;

        paragrafoResultado.textContent =
            `Valor = R$ ${total.toFixed(2)}`;

    } else if (codigo === 5) {

        total = quantidade * 7.32;

        paragrafoResultado.textContent =
            `Valor = R$ ${total.toFixed(2)}`;

    }  else {

        paragrafoResultado.textContent =
            "Código do produto inválido!";
    }
}