const contadorElement = document.getElementById("numero")
const aumentarButton = document.getElementById("aumentar")
const disminuirButton = document.getElementById("disminuir")
const resetearButton = document.getElementById("resetear")


let contador = 0;

aumentarButton.addEventListener("click" ,() => {
     contador++;
    contadorElement.innerHTML = contador
    console.log(contador);

});

disminuirButton.addEventListener ("click", () => {
  if (contador > 0)
        contador--;
        contadorElement.innerHTML = contador
     console.log(contador);
   
});

resetearButton.addEventListener("click", () => {
    contador = 0;
    contadorElement.innerHTML = contador
        console.log(contador);
});
