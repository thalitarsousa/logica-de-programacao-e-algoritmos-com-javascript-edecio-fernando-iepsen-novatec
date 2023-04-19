const formulario = document.querySelector("form");
const resposta = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const velPermitida = Number(formulario.velPermitida.value)
    const velCondutor = Number(formulario.velCondutor.value)

    if(velCondutor <= velPermitida) {
        resposta.innerText = "Sem multa"
    }else {
        const maisVinte = velPermitida * 1.2
        if(velCondutor <= maisVinte) {
            resposta.innerText = "Situação: Multa leve"
        }else {
            resposta.innerText = "Situação: Multa grave"
        }
    }

    e.preventDefault()
})