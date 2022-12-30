document.title = "Eventos";
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
var ValorXAleatorio = 0;
var ValorYAleatorio = 0;
var radio = 10;
//Mostrar Alerta
// function MostrarAlerta(Evento) {
//   //console.log(Evento)
//   let posicionX = Evento.pageX - pantalla.offsetLeft;
//   let posicionY = Evento.pageY - pantalla.offsetTop;
//   DibujarCirculo(posicionX, posicionY);
//   console.log("Hizo Click en " + posicionX + ", " + posicionY);
// }
pantalla.onclick = Disparar;

function Disparar(evento) {
  let PageX = evento.pageX - pantalla.offsetLeft;
  let PageY = evento.pageY - pantalla.offsetTop;
  //Verificar si el click esta en en perimetro de la circunferencia central.
  if (
    PageX < ValorXAleatorio + radio &&
    PageX > ValorXAleatorio - radio &&
    PageY < ValorYAleatorio + radio &&
    PageY > ValorYAleatorio - radio
  ) {
    console.log("Acertaste");
    alert("Felicidades Acertaste");
  }
}
function DibujarCirculo(posicionx, posiciony, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(posicionx, posiciony, radio, 0, 2 * Math.PI);
  pincel.fill();
  //console.log(posicionx,posiciony);
}

function ActualizarCanva(posicionX, posicionY) {
  LimpiarCanva();
  ValorXAleatorio = GeneraPosicionAleatoria(pantalla.width);
  ValorYAleatorio = GeneraPosicionAleatoria(pantalla.height);
  CrearObjetivo(ValorXAleatorio, ValorYAleatorio);
}
function LimpiarCanva() {
  pincel.clearRect(0, 0, 600, 600);
  pincel.fillStyle = "grey";
  pincel.fillRect(0, 0, 600, 600);
}

function GeneraPosicionAleatoria(ValorMaximo) {
  let MultiplicadorRandom = Math.random();
  //console.log(MultiplicadorRandom);
  if (MultiplicadorRandom >= 0.05 && MultiplicadorRandom <= 0.95) {
    return Math.floor(MultiplicadorRandom * ValorMaximo);
  } else {
    return 35;
  }
}
function CrearObjetivo(posicionX, posicionY) {
  DibujarCirculo(posicionX, posicionY, radio + 20, "red");
  DibujarCirculo(posicionX, posicionY, radio + 10, "white");
  DibujarCirculo(posicionX, posicionY, radio, "red");
  //console.log(posicionX+","+posicionY+",");
}
setInterval(ActualizarCanva, 1000);
