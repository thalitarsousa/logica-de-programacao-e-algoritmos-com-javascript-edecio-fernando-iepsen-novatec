const formulario = document.querySelector("form");
const resposta = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const nome = formulario.nome.value;
    const feminino = formulario.feminino.checked;
    const altura = Number(formulario.altura.value);

    let peso;

    if (feminino) {
        peso = 21 * Math.pow(altura, 2)
    } else {
        peso = 22 * Math.pow(altura, 2)
    }

    resposta.innerText = `${nome}, o seu peso ideal é ${peso.toFixed(3)} kg`

    //pode ser usado o operador ternário abaixo
    //const peso = feminino ? 21 * Math.pow(altura, 2) : 22 * Math.pow(altura, 2)

    e.preventDefault()
    formulario.addEventListener('reset', () => {
        resposta.innerText = ""
    })
})