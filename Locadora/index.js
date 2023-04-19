const formulario = document.querySelector("form");
const respValor = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const valor = Number(formulario.valor.value)
    const tempoDeUso = Number(formulario.tempo.value)

    const valorAPagar = Math.ceil(tempoDeUso / 15) * valor

    respValor.innerText = `Valor a pagar R$${valorAPagar.toFixed(2)}`

    e.preventDefault()
})