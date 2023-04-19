const formulario = document.querySelector("form");
const valorTotal = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const valorQuilo = Number(formulario.quilo.value);
    const consumoCliente = Number(formulario.consumo.value);
    const valorAPagar = (valorQuilo / 1000) * consumoCliente

    valorTotal.innerText = `Valor a pagar R$:${valorAPagar.toFixed(2)}`

    e.preventDefault()
})