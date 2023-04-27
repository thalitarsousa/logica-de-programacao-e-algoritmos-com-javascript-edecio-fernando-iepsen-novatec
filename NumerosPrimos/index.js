const formulario = document.querySelector("form");
const resp1 = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(formulario.numero.value);
    let temDivisor = 0;

    for (let i = 2; i <= numero / 2; i++) { 
        if(numero % i == 0) {
            temDivisor = 1
            break
        }
    }

    if (numero > 1 && !temDivisor) {
        resp1.innerText = `${numero} é Primo.`
    }else {
        resp1.innerText = `${numero} não é Primo.`
    }

})