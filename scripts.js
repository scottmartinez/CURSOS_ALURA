var path= window.location.pathname;
var pagina=path.split("/").pop();

console.log(pagina);
function SaltoLinea()
{
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}
function imprimir(frase)
{
    if (pagina=="imc.html")
    {
      document.getElementById("calculoimc").innerHTML=frase;
      SaltoLinea();
    }
    else if(pagina=="futbol.html")
    {
    document.getElementById("puntos").innerHTML=frase
    SaltoLinea()
    }
    else if(pagina=="adivinanzas.html")
    {
        document.getElementById("mensaje").innerHTML=frase;
        SaltoLinea();
    }
    else if (pagina=="mundiales.html")
    {
        document.getElementById("listMundiales").innerHTML+=frase+"<br>";
        SaltoLinea()
    }
    else if(pagina=="tablasMultiplicar.html")
    {
        document.getElementById("Tablas").innerHTML+=frase+"<br>";
    }
}

if(pagina=="futbol.html")//Pagina del Futbol {Tema:Tipos de Datos}
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
else if(pagina=="imc.html") //Pagina del IMC {Tema: Condicionales IF}
{

 nombre = prompt("Ingrese nombre");
 Peso= parseFloat( prompt(nombre +" Ingrese su peso en Kilogramos"));
 Altura=parseFloat(prompt(nombre+ " Ingrese su Altura en metros"));
 CalculoIMC= Math.round(calcularimc(Peso,Altura));

    if(CalculoIMC<=18.5)
    {
        imprimir(nombre+" Su IMC de "+CalculoIMC+" es Considerado por debajo de lo recomendado");
    }
    else if (CalculoIMC>18.5 && CalculoIMC<=24.9)
    {
        imprimir(nombre+" Su IMC de "+CalculoIMC+" es Considerado Normal");
    }
    else if(CalculoIMC>=25 && CalculoIMC<29.9)
    {
        imprimir(nombre+" Su IMC de "+CalculoIMC+" es Considerado Sobrepeso Preobesidad");
    }
    else
    {
        imprimir(nombre+" Su IMC de "+CalculoIMC+" es Considerado Obesidad Maldito Gord@ baja de peso");
    }
   

    function calcularimc(peso,altura)
    {
        return (peso /(altura*altura));
    }

}
else if (pagina=="adivinanzas.html")//Pagina del Adivina el Numero {Tema: Condicionales IF-ELSE}
{
     var NumeroAdivinar=parseInt((Math.random()*10).toFixed(0));
     var NumeroUsuario= parseInt(prompt("Ingresa un numero entre 0 y 10"))
       {
       
          if(NumeroAdivinar==NumeroUsuario)
         {
             imprimir("Correcto el numero era "+NumeroAdivinar);
             console.log(NumeroAdivinar);
         }
         else 
         {
            imprimir(" Te equivocaste el numero era "+NumeroAdivinar);
         }
     } 
}
else if(pagina=="mundiales.html")//Pagina de los años que Hubo Mundial FIFA {Tema: Itereciones con While}
{
    var AnioPrimerMundial=1930;
    var AnioLimite= parseInt(prompt("Ingresa el año maximo para calcular"))
     while (AnioPrimerMundial<=AnioLimite)
      {
        imprimir("El hubo mundial FIFA en el AÑO " + AnioPrimerMundial)
        AnioPrimerMundial+=4;
      }
}
else if ("tablasMultiplicar.html")//Pagina de las tablas de Multiplicar {Tema:Iteraciones FOR}
{

}
