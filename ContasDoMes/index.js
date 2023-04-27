const formulario = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

let resposta = ""
let numContas = 0
let valorTotal = 0

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = formulario.descricao.value
    const valor = Number(formulario.valor.value)

    numContas++
    valorTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}-------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    formulario.descricao.valor = ""
    formulario.valor.valor = ""
    formulario.descricao.focus()
})