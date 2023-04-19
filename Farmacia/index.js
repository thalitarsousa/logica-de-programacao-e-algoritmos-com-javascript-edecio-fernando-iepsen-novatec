const formulario = document.querySelector("form");
const respMedicamento = document.querySelector("h2");
const respValor = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    const medicamento = formulario.medicamento.value
    const valorTotal = formulario.valor.value
    const valorPromocao = Math.floor(valorTotal) * 2

    respMedicamento.innerText = `Promoção de ${medicamento}`
    respValor.innerText = `Leve 2 por apenas R$${valorPromocao.toFixed(2)}`

    e.preventDefault()
})