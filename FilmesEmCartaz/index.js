const formulario = document.querySelector("form")
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

formulario.addEventListener("submit", (e) => {
    const nomeFilme = formulario.titulo.value
    const duracaoFilme = formulario.duracao.value

    const horas = Math.floor(duracaoFilme / 60) //arredonda o resultado para baixo
    const minutos = duracaoFilme % 60 //obtém o resto da divisão
    
    resp1.innerText = nomeFilme
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s).`

    e.preventDefault()
})
