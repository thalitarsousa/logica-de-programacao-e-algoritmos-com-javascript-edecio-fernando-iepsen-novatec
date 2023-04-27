const formulario = document.querySelector("form");
const resp1 = document.querySelector("pre");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const quantidade = formulario.quantidade.value;
    const anos = formulario.anos.value;

    let resposta = ""
    let total = quantidade

    for(let i = 1; i <= anos; i++) {
        resposta = `${resposta} ${i}º Ano: ${total} Chinchilas\n`
        total = total * 3
    }

    resp1.innerText = resposta
})