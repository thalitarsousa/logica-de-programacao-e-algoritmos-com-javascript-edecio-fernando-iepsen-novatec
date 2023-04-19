const formulario = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

formulario.addEventListener("submit", (e) =>{

    const ladoA = Number(formulario.ladoA.value)
    const ladoB = Number(formulario.ladoB.value)
    const ladoC = Number(formulario.ladoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        resp1.innerText = `Lados não podem formar um triângulo.`
    }else {
        resp1.innerText = "Lados podem formar um triângulo."
        if(ladoA == ladoB && ladoA == ladoC) {
            resp2.innerText = "Tipo: Equilátero"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            resp2.innerText = "Tipo: Isósceles"
        } else {
            resp2.innerText = "Tipo: Escaleno"
        }
    }

    e.preventDefault()
})