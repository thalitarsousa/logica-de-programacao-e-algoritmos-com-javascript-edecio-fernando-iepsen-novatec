const formulario = document.querySelector("form");
const resposta = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const numero = formulario.numero.value;
    const raizQuadrada = Math.sqrt(numero);

    if(Number.isInteger(raizQuadrada)) {
        resposta.innerText = `Raiz: ${raizQuadrada}`
    } else {
        resposta.innerText = `Não há raiz exata para ${numero}.`
    }

    e.preventDefault()
})