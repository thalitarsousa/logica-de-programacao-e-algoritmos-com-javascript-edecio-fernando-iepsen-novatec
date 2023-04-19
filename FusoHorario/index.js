const formulario = document.querySelector("form");
const respostaHorario = document.querySelector("h2");

formulario.addEventListener("submit", (e) => {
    const horaBrasil = Number(formulario.horaBrasil.value);

    let horaFranca = horaBrasil + 5;
    
    if(horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    respostaHorario.innerText = `Hora na França: ${horaFranca.toFixed(2)}`

    e.preventDefault();
})