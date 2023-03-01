
document.getElementById("boton").addEventListener("click", function () {
    console.log("Capturado evento click");
    if(document.getElementById("datosGenerales").style.display ==='none') {
        document.getElementById("datosGenerales").style.display ='block';
        document.getElementById("boton").innerHTML = "Ocultar Datos";
    }
    else {
        document.getElementById("datosGenerales").style.display ='none';
        document.getElementById("boton").innerHTML = "Mostrar Datos";
    }
})

document.getElementById("boton_formacion").addEventListener("click", function () {
    console.log("Capturado evento click");
    if(document.getElementById("formacion").style.display ==='none') {
        document.getElementById("formacion").style.display ='block';
        document.getElementById("boton_formacion").innerHTML = "Ocultar Formacion";
    }
    else {
        document.getElementById("formacion").style.display ='none';
        document.getElementById("boton_formacion").innerHTML = "Mostrar Formacion";
    }
});

document.getElementById("boton_Experiencia").addEventListener("click", function () {
    console.log("Capturado evento click");
    if(document.getElementById("Experiencia").style.display ==='none') {
        document.getElementById("Experiencia").style.display ='block';
        document.getElementById("boton_Experiencia").innerHTML = "Ocultar Experiencia";
    }
    else {
        document.getElementById("Experiencia").style.display ='none';
        document.getElementById("boton_Experiencia").innerHTML = "Mostrar Experiencia";
    }
});