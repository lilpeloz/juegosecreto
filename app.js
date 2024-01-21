//document.querySelector sirve para conectar con el html.
//variable
let numeroSecreto = 0;
let intetnos = 0;
let listiaNumerosSorteados = [];
let numeroMaximo = 10;
//variables estructuradas se utilizan[] (array) todos lo arreglos comienza en posicion 0
//let numerosSorteados =[]; variables estructuradas [] se utlizian para array
//console.log(numerosSorteados);
//numeroSorteados.push(0); es para agregar elementos a una lista se utiliza a lo ulitmo
//console.log(numeroSorteados[0]); para buscar un elemento especifico de la lista
//console.log(numeroSorteados.length); pide el tamaño de la lista
//console.log(numerosSorteados[numerosSorteads.legth-1]); para llevar a la ultima posicion del elemento
// ctrl + f buscar cualquier cosa en visual
//funciones

function asginarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento); 
    elementoHtml.innerHTML = texto;
    return;
}
function VerificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("ValorUsuario").value); //parseint forzar que sea numero

    if (numeroUsuario === numeroSecreto) {
        asginarTextoElemento("p",`acertaste en ${intetnos} ${(intetnos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // el usuario no acerto
        if (numeroSecreto > numeroSecreto) {
            asginarTextoElemento("p","es menor el numero secreto");
        } else {
            asginarTextoElemento("p","es mayor el numero secreto");
        }
        
        intetnos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#ValorUsuario').value = "";
   // let valorCaja = document.querySelector('#ValorUsuario');
   // valorCaja.value = "";
  }
  
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listiaNumerosSorteados);
    //si ya sorteamos todos los numero
    if (listiaNumerosSorteados.length == numeroMaximo){
       asginarTextoElemento("p", "ya se sortearon los numero posibles");
    } else {
        // si el numero generado esta incluido en la lista hacemos una operacion o hacemos otra
        if (listiaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listiaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesIniciales(){
    asginarTextoElemento("h1", "juego del numero secreto");
    asginarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intetnos = 1;
}
function reiniciarJuego(){
    // limpar la caja
    limpiarCaja();
    // indicar msj inicio
    // generar numero aleatorio
    // deshabilitar el boton nuevo juego
    // incializar el numero de intentos
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
