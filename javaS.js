// Inputs
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");
const inputTemas = document.getElementById("temas");
const inputViaje = document.getElementById("viaje");

// Mensajes de error
const errorNombre = document.getElementById("nombre-error");
const errorEdad = document.getElementById("edad-error");
const errorNota1 = document.getElementById("nota1-error");
const errorNota2 = document.getElementById("nota2-error");
const errorTemas = document.getElementById("temas-error");
const errorViaje = document.getElementById("viaje-error");

function verificarDatos(){
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    const nota1 = inputNota1.value;
    const nota2 = inputNota2.value;
    const temas = inputTemas.value;
    const viaje = inputViaje.checked;
    

    if (nombre.trim() === ""){
        inputNombre.style.border = "1px solid red";
        errorNombre.hidden = false;
    } else {
        inputNombre.style.border = "1px solid green";
        errorNombre.hidden = true;
    }

    if (edad < 14 || edad > 17){
        inputEdad.style.border = "1px solid red";
        errorEdad.hidden = false;
    } else {
        inputEdad.style.border = "1px solid green";
        errorEdad.hidden = true;        
    }

    if (nota1 < 8){
        inputNota1.style.border = "1px solid red";
        errorNota1.hidden = false;
    } else {
        inputNota1.style.border = "1px solid green";
        errorNota1.hidden = true;
    }

    if (nota2 < 8){
        inputNota2.style.border = "1px solid red";
        errorNota2.hidden = false;
    } else {
        inputNota2.style.border = "1px solid green";
        errorNota2.hidden = true;
    }

    if (temas != "A"){
        inputTemas.style.border = "1px solid red";
        errorTemas.hidden = false;
    } else {
        inputTemas.style.border = "1px solid green";
        errorTemas.hidden = true;
    }

    if (!viaje){
        inputViaje.style.border = "1px solid red";
        errorViaje.hidden = false;
    } else {
        inputViaje.style.border = "1px solid green";
        errorViaje.hidden = true;
    }
}