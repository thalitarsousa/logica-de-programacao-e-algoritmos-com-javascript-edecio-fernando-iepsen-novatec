const formulario = document.querySelector("form");
const inPromocao = document.getElementById("promocao");
const inEntrada = document.getElementById("entrada");
const inParcelas = document.getElementById("parcelas");

formulario.addEventListener("submit", (e) => {
    const veiculo = formulario.modelo.value
    const valorTotal = formulario.valor.value
    const valorEntrada = valorTotal * 0.50
    const valorParcelado = valorEntrada / 12

    inPromocao.innerText = `Promoção: ${veiculo}`
    inEntrada.innerText = `Entrada de R$${valorEntrada.toFixed(2)}`
    inParcelas.innerText = `+12x de R$${valorParcelado.toFixed(2)}`

    e.preventDefault()
})