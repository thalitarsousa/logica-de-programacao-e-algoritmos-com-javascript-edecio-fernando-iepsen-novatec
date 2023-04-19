const formulario = document.querySelector("form");
const resposta1 = document.querySelector("#resposta1")
const resposta2 = document.querySelector("#resposta2")
const resposta3 = document.querySelector("#resposta3")

formulario.addEventListener("submit", (e) => {
    const valorSaque = Number(formulario.valor.value);

    if(valorSaque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        formulario.valor.focus()
        return
    }

    const notasCem = Math.floor(valorSaque / 100)
    let resto = valorSaque % 100

    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50

    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {
        resposta1.innerText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resposta2.innerText = `Notas de R$50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resposta3.innerText = `Notas de R$10: ${notasDez}`
    }

    e.preventDefault()

})