let boton=document.getElementById("icono");
let enlaces=document.getElementById("enlaces");
let retorno=document.getElementById("retorno");
let contador=0;

boton.addEventListener("click", function(){
    if (contador==0){
        enlaces.className=("enlaces dos")
        contador=1
    }else{
        enlaces.classList.remove("dos");
        enlaces.className=("enlaces uno")
        contador=0
    }
})
retorno.addEventListener("click", function(){
    if (contador==0){
        enlaces.className=("enlaces dos")
        contador=1
    }else{
        enlaces.classList.remove("dos");
        enlaces.className=("enlaces uno")
        contador=0
    }
})


const maquina2 = document.getElementById('maquina-escribir2')



const maquinaEscribir2 = (text = '',tiempo = 20, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let cont = 0
  let escribir = setInterval(function(){
    etiqueta.innerHTML += arrayCaracteres[cont]
    cont++
    if (cont === arrayCaracteres.length) {
      cont = 0
      etiqueta.innerHTML = ''
    }
  }, tiempo)
}



maquinaEscribir2("ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus enim nesciunt ex similique voluptas asperiores quisquam in repellat quae minus reiciendis, sapiente fugiat maxime doloremque placeat aut iusto recusandae.     ",80, maquina2)