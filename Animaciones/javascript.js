document.title = "Canvas";

function DibujarCuadros(posicionX, posicionY, colorCuadro) {
  let pantalla = document.getElementById("canva");
  let pincel = pantalla.getContext("2d");
  pincel.fillStyle = colorCuadro;
  pincel.fillRect(posicionX, posicionY, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(posicionX, posicionY, 50, 50);
}
let contador = 0;
while (contador < 600) {
  DibujarCuadros(contador,0,"red");
  DibujarCuadros(contador,50,"yellow");
  DibujarCuadros(contador,100,"green");
  contador+=50;
}
//Usando FOR
for (let index = 0; index <=600; index+=50) {
  
  DibujarCuadros(index,151,"red");
  DibujarCuadros(index,200,"yellow");
  DibujarCuadros(index,250,"green");
  console.log(index)
}
