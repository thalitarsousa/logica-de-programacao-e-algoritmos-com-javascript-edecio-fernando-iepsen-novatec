const formulario = document.querySelector("form");
const resp = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const numero = formulario.numero.value
    let resposta = `Entre ${numero} e 1: ` 

    for(let i = numero; i > 1; i--) {
        resposta = resposta + i + ", "
    }
 
    resp.innerText = resposta + "1."
    

    e.preventDefault()
})