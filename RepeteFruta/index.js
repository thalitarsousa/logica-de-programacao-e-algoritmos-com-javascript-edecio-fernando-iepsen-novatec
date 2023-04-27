const formulario = document.querySelector("form");
const resp1 = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = formulario.fruta.value
    const numero = Number(formulario.numero.value)
    let resposta = ""

    for(let i = 1; i <= numero; i++) {
        resposta = `${resposta} ${fruta} *`
    }

    resp1.innerText = resposta
})