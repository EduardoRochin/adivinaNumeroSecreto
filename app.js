let intentos = 0;
let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    if(listaNumerosSorteados.length == numeroMaximo){
        agregarTextoElemento(elemento = 'p', texto ='LLegaste al final del juego');
        return;
    }
        else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            return numeroGenerado
        }}
}

function agregarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    numeroDeUsuario = parseInt(numeroDeUsuario);
    if (numeroDeUsuario === numeroSecreto) {
        agregarTextoElemento(elemento = 'p', texto = `Acertaste el numero secreto en ${intentos} ${intentos == 1 ?'vez' :'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        listaNumerosSorteados.push(numeroDeUsuario)
    }
    else {
        //EL usuario no acerto
        limpiarCaja();
        if(numeroDeUsuario < numeroSecreto) {
            agregarTextoElemento(elemento = 'p', texto ='El numero secreto es mayor ')
        }
        else {
            agregarTextoElemento(elemento = 'p', texto ='El numero secreto es menor ')
        }
        intentos ++;
    }
    return;
}

function condicionesIniciales() {
    agregarTextoElemento(elemento = 'h1', texto='Juego del numero secreto actualizado: Beta');
    agregarTextoElemento(elemento = 'p', texto = `Ingresa un numero entre el 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();


