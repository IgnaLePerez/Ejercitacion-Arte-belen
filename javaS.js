function verificarDatos(){
    let edad = document.getElementById("edad").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let temas = document.getElementById("temas").value;
    let viaje = document.getElementById("viaje").checked;
    
    if (edad < 14 || edad > 17){
        document.getElementById("edadError").innerHTML = "La edad debe estar entre 14 y 17 años";
        document.getElementById("edadError").style.color = "red";
    } else {
        document.getElementById("edadError").innerHTML = "";
    }

    if (nota1 < 8){
        document.getElementById("nota1Error").innerHTML = "La nota 1 debe ser mayor o igual a 8";
        document.getElementById("nota1Error").style.color = "red";
    } else {
        document.getElementById("nota1Error").innerHTML = "";
    }

    if (nota2 < 8){
        document.getElementById("nota2Error").innerHTML = "La nota 2 debe ser mayor o igual a 8";
        document.getElementById("nota2Error").style.color = "red";
    } else {
        document.getElementById("nota2Error").innerHTML = "";
    }

    if (temas != "A"){
        document.getElementById("temasError").innerHTML = "Debe aprobar ambos temas";
        document.getElementById("temasError").style.color = "red";
    } else {
        document.getElementById("temasError").innerHTML = "";
    }

    if (!viaje){
        document.getElementById("viajeError").innerHTML = "Debe estar dispuesto a viajar";
        document.getElementById("viajeError").style.color = "red";
    }  else {
        document.getElementById("viajeError").innerHTML = "";
    }
}