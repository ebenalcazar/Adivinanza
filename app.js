const botonCorrecto = document.getElementById("botonCorrecto");
const botonEquivocado1 = document.getElementById("botonEquivocado1");
const botonEquivocado2 = document.getElementById("botonEquivocado2");
const spanRespuesta = document.getElementById("spanRespuesta")

const respuesta = () => {
    if(botonCorrecto.onclick) {
        spanRespuesta.textContent = `¡Respuesta correcta!`
        botonCorrecto.style.backgroundColor = "green"
    }
    else if(botonEquivocado1.onclick) {
        spanRespuesta.textContent = `¡Respuesta equivocada!`
        botonCorrecto.style.backgroundColor = "green"
        botonEquivocado1.style.backgroundColor = "red"
        botonEquivocado2.style.backgroundColor = "red"
    }
    else if(botonEquivocado2.onclick) {
        spanRespuesta.textContent = `¡Respuesta equivocada!`
        botonCorrecto.style.backgroundColor = "green"
        botonEquivocado1.style.backgroundColor = "red"
        botonEquivocado2.style.backgroundColor = "red"
    }
}
botonCorrecto.onclick = respuesta;
botonEquivocado1.onclick = respuesta;
botonEquivocado2.onclick = respuesta;