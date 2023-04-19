const formulario = document.querySelector("form");
const resposta = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const numero = formulario.numero.value
    const parOuImpar = numero % 2 == 0 ? `${numero} é par.` : `${numero} é ímpar.`

    resposta.innerText = parOuImpar

    /* if(numero % 2 == 0) {
        resposta.innerText = `${} é par.`
    }else {
        resposta.innerText = `${numero} é ímpar.`
    } */

    e.preventDefault()
})