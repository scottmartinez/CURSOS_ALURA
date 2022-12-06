var path= window.location.pathname;
var pagina=path.split("/").pop();

//console.log(pagina);
function SaltoLinea()
{
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}
function imprimir(frase)
{
    document.write(frase);
    document.write();
    SaltoLinea()
}

if(pagina=="futbol.html")
{
let victorias =parseInt( prompt("ingresa cantidad de Victorias"));
let empates= parseInt(prompt("ingresa empates"));
let PuntosAnioPasado=28;
puntostotales= victorias*3+empates;

imprimir("El total de puntos es de "+ parseInt(puntostotales));

if (puntostotales> PuntosAnioPasado)
 imprimir("El equipo esta mejor que el año pasado");
if (puntostotales<PuntosAnioPasado)
 imprimir("El equipo esta peor que año pasado");
if(puntostotales==PuntosAnioPasado)
   imprimir("El equipo esta igual al año pasado");
}

