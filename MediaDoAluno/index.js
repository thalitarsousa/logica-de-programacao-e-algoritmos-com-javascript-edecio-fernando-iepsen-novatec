const formulario = document.querySelector("form");
const respMedia = document.querySelector("h2");
const resultado = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {
    const nomeAluno = formulario.nome.value
    const primeiraNota = Number(formulario.nota1.value)
    const segundaNota = Number(formulario.nota2.value)
    const mediaFinal = (primeiraNota + segundaNota) / 2

    respMedia.innerText = `Média das Notas: ${mediaFinal.toFixed(2)}`

    if(mediaFinal >= 7) {
        resultado.innerText = `Parabéns, ${nomeAluno}! Você foi aprovado(a).`
        resultado.style.color = "blue"
    } else if(mediaFinal >= 4) {
        resultado.innerText = `Atenção, ${nomeAluno}. Você está em exame.`
        resultado.style.color = "green"
    } else {
        resultado.innerText = `Ops... ${nomeAluno}. Você foi reprovado(a).`
        resultado.style.color = "red"
    }

    e.preventDefault()
})