let botonvolver = document.getElementById("botonvolver");
let enlaces = document.getElementById("enlaces");
let retorno = document.getElementById("retorno");

let contador = 0;

botonvolver.addEventListener("click", function() {
    if (contador == 0) {
        enlaces.className = ("enlaces dos")
        contador = 1


    } else {
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno")
        contador = 0
        document.getElementById('contenedormenu').style.display = 'block'


    }
})
retorno.addEventListener("click", function() {
    if (contador == 0) {
        enlaces.className = ("enlaces dos")
        contador = 1
        document.getElementById('contenedormenu').style.display = 'none';
    } else {
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno")
        contador = 0

    }
})