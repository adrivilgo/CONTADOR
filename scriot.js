const contadorElement = document.getElementById("contador")
const aumentarButton = document.getElementById("aumentar")
const diminuirButton = document.getElementById("disminuir")
const resetearButton = document.getElementById("resetear")
const numeroImput = document.getElementById("aumentar")

let contador = 0;

aumentarButton.addEventListener("click" ,() => {
    contador += parseInt (numeroImput.value) || 1;
    contadorElement.textContent = contador;
    numeroImput.value = " ";

});

disminuirButton.addEventListener ("click", =() => {
    contador -= parseInt(numeroImput.value) || 1;
    contadorElement.textContent = contador;
    numeroImput.value = " ";
});

resetearButton.addEventListener("click", () => {
    contador = 0;
    contadorElement.textContent = contador;
    numeroImput.value = " ";
});
