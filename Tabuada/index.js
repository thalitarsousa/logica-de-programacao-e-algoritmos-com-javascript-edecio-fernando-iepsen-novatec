const formulario = document.querySelector("form");
const resp = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(formulario.numero.value);
    let resposta = "" //variavel do tipo string para concatenar a resposta

    for(let i = 1; i <= 10; i++) {
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }

    resp.innerText = resposta

}) 