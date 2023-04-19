const formulario = document.querySelector("form");
const respTempo = document.querySelector("#tempo");
const respTroco = document.querySelector("#troco");

formulario.addEventListener("submit", (e) => {
    const valor = Number(formulario.valor.value)

    if(valor < 1.00) {
        alert("Valor insuficiente (no mínimo R$1,00)")
        formulario.valor.focus()
        return
    }

    let tempo
    let troco

    if(valor >= 3.00){
        tempo = 120
        troco = valor - 3.00
    }else if(valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    }else {
        tempo = 30
        troco = valor - 1.00
    }

    respTempo.innerText = `Tempo: ${tempo} minutos`
    respTroco.innerText = `Troco: R$${troco}`
  
    e.preventDefault()
})