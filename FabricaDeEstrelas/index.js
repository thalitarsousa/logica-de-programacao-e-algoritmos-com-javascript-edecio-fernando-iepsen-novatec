const formulario = document.querySelector("form");
const resp1 = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(formulario.quantidade.value);

    let estrelas = ""

    for(let i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + "*"
        }else {
            estrelas = estrelas + "-"
        }
    }
    resp1.innerText = estrelas 
})