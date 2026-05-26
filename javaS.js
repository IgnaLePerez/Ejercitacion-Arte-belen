// Main
const main = document.getElementById("main");
main.estado = "claro"
// Botón Cambiar Modo
const btnCambiarModo = document.getElementById("btnCambiarModo");

// Formulario
const formulario = document.getElementById("formulario");

// Labels
const labelNombre = document.getElementById("labelNombre");
const labelEdad = document.getElementById("labelEdad");
const labelNota1 = document.getElementById("labelNota1");
const labelNota2 = document.getElementById("labelNota2");
const labelTemas = document.getElementById("labelTemas");
const labelViaje = document.getElementById("labelViaje");

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

// Botón Enviar
const btnEnviar = document.getElementById("btnEnviar");

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

function cambiarModo(){
    // Configuracion modo oscuro
    const contrasteOscuro = "#b1b1b1"
    const fondoOscuro = "#100c22"
    const fondoBtnOscuro = "#0b0817";
    const bordeOscuro = "1px solid " + contrasteOscuro
    const letraOscuro = "white"
    const sombraOscuro = "-10px -10px 20px 0px " + contrasteOscuro

    // Configuracion modo claro
    const contrasteClaro = "grey"
    const fondoClaro = "#FFFFFF"
    const fondoBtnClaro = "#f2f2f2";
    const bordeClaro = "1px solid " + contrasteClaro
    const letraClaro = "#000000"
    const sombraClaro = "-10px -10px 20px 0px #b7b0b0"
    
    if (main.estado === "claro"){
        console.log("Entró")
        main.style.background = fondoOscuro;
        
        btnCambiarModo.style.background = fondoBtnOscuro;
        btnCambiarModo.style.border =  bordeOscuro;
        btnCambiarModo.style.color = letraOscuro;

        formulario.style.background = fondoOscuro;
        formulario.style.border = bordeOscuro;
        formulario.style.boxShadow = sombraOscuro;

        labelNombre.style.color = letraOscuro;

        inputNombre.style.backgroundColor = fondoOscuro;
        inputNombre.style.color = letraOscuro;
        inputNombre.style.border = bordeOscuro;

        labelEdad.style.color = letraOscuro;

        inputEdad.style.backgroundColor = fondoOscuro;
        inputEdad.style.color = letraOscuro;
        inputEdad.style.border = bordeOscuro;

        labelNota1.style.color = letraOscuro;

        inputNota1.style.backgroundColor = fondoOscuro;
        inputNota1.style.color = letraOscuro;
        inputNota1.style.border = bordeOscuro;

        labelNota2.style.color = letraOscuro;

        inputNota2.style.backgroundColor = fondoOscuro;
        inputNota2.style.color = letraOscuro;
        inputNota2.style.border = bordeOscuro;

        labelTemas.style.color = letraOscuro;

        inputTemas.style.backgroundColor = fondoOscuro;
        inputTemas.style.color = letraOscuro;
        inputTemas.style.border = bordeOscuro;

        labelViaje.style.color = letraOscuro;

        inputViaje.style.backgroundColor = fondoOscuro;
        inputViaje.style.border = bordeOscuro;

        btnEnviar.style.background = fondoBtnOscuro;
        btnEnviar.style.border = bordeOscuro;
        btnEnviar.style.color = letraOscuro;

        main.estado = "oscuro"
    } 
    
    else{
        main.style.background = fondoClaro;
        
        btnCambiarModo.style.background = fondoBtnClaro;
        btnCambiarModo.style.border = bordeClaro;
        btnCambiarModo.style.color = letraClaro;

        formulario.style.background = fondoClaro;
        formulario.style.border = bordeClaro;
        formulario.style.boxShadow = sombraClaro;

        labelNombre.style.color = letraClaro;

        inputNombre.style.backgroundColor = fondoClaro;
        inputNombre.style.color = letraClaro;
        inputNombre.style.border = bordeClaro;

        labelEdad.style.color = letraClaro;

        inputEdad.style.backgroundColor = fondoClaro;
        inputEdad.style.color = letraClaro;
        inputEdad.style.border = bordeClaro;

        labelNota1.style.color = letraClaro;

        inputNota1.style.backgroundColor = fondoClaro;
        inputNota1.style.color = letraClaro;
        inputNota1.style.border = bordeClaro;

        labelNota2.style.color = letraClaro;

        inputNota2.style.backgroundColor = fondoClaro;
        inputNota2.style.color = letraClaro;
        inputNota2.style.border = bordeClaro;

        labelTemas.style.color = letraClaro;

        inputTemas.style.backgroundColor = fondoClaro;
        inputTemas.style.color = letraClaro;
        inputTemas.style.border = bordeClaro;

        labelViaje.style.color = letraClaro;

        inputViaje.style.backgroundColor = fondoClaro;
        inputViaje.style.border = bordeClaro;

        btnEnviar.style.background = fondoBtnClaro;
        btnEnviar.style.border = bordeClaro;
        btnEnviar.style.color = letraClaro;

        main.estado = "claro";
    }
}