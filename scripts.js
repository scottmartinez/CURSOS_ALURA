var path = window.location.pathname;
var pagina = path.split("/").pop();

console.log(pagina);
function SaltoLinea() {
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
}
function imprimir(frase) {
  if (pagina == "imc.html") {
    document.getElementById("calculoimc").innerHTML = frase;
    SaltoLinea();
  } else if (pagina == "futbol.html") {
    document.getElementById("puntos").innerHTML = frase;
    SaltoLinea();
  } else if (pagina == "adivinanzas.html") {
    document.getElementById("mensaje").innerHTML = frase;
    SaltoLinea();
  } else if (pagina == "mundiales.html") {
    document.getElementById("listMundiales").innerHTML += frase + "<br>";
    SaltoLinea();
  } else if (pagina == "tablasMultiplicar.html") {
    document.getElementById("Tablas").innerHTML += frase + "<br>";
  } else if (pagina == "promedios.html") {
    document.getElementById("edades").innerHTML = frase;
  }
}

if (pagina == "futbol.html") {
  //Pagina del Futbol {Tema:Tipos de Datos}
  let victorias = parseInt(prompt("ingresa cantidad de Victorias"));
  let empates = parseInt(prompt("ingresa empates"));
  let PuntosAnioPasado = 28;
  puntostotales = victorias * 3 + empates;

  imprimir("El total de puntos es de " + parseInt(puntostotales));

  if (puntostotales > PuntosAnioPasado)
    imprimir("El equipo esta mejor que el año pasado");
  if (puntostotales < PuntosAnioPasado)
    imprimir("El equipo esta peor que año pasado");
  if (puntostotales == PuntosAnioPasado)
    imprimir("El equipo esta igual al año pasado");
} else if (pagina == "imc.html") {
  //Pagina del IMC {Tema: Condicionales IF}
  nombre = prompt("Ingrese nombre");
  Peso = parseFloat(prompt(nombre + " Ingrese su peso en Kilogramos"));
  Altura = parseFloat(prompt(nombre + " Ingrese su Altura en metros"));
  CalculoIMC = Math.round(calcularimc(Peso, Altura));

  if (CalculoIMC <= 18.5) {
    imprimir(
      nombre +
        " Su IMC de " +
        CalculoIMC +
        " es Considerado por debajo de lo recomendado"
    );
  } else if (CalculoIMC > 18.5 && CalculoIMC <= 24.9) {
    imprimir(nombre + " Su IMC de " + CalculoIMC + " es Considerado Normal");
  } else if (CalculoIMC >= 25 && CalculoIMC < 29.9) {
    imprimir(
      nombre +
        " Su IMC de " +
        CalculoIMC +
        " es Considerado Sobrepeso Preobesidad"
    );
  } else {
    imprimir(
      nombre +
        " Su IMC de " +
        CalculoIMC +
        " es Considerado Obesidad baja de peso"
    );
  }

  function calcularimc(peso, altura) {
    return peso / (altura * altura);
  }
} else if (pagina == "adivinanzas.html") {
  //Pagina del Adivina el Numero {Tema: Condicionales IF-ELSE ,While ,Break}
  var NumeroAdivinar = parseInt((Math.random() * 10).toFixed(0));

  var cantidadIntentos = 3;
  var contadorIntentos = 1;
  while (contadorIntentos <= cantidadIntentos) {
    var NumeroUsuario = parseInt(prompt("Ingresa un numero entre 0 y 10"));
    if (NumeroAdivinar == NumeroUsuario) {
      alert(
        "Correcto el numero era " +
          NumeroAdivinar +
          " Adivinaste en el " +
          contadorIntentos +
          " intento"
      );
      break;
    } else {
      // console.log("numero adivinar es " + NumeroAdivinar);
      // console.log("Numero Usuario es "+ NumeroUsuario)
      if (NumeroUsuario < NumeroAdivinar)
        alert("Prueba con un numero mas alto");
      else if (NumeroUsuario > NumeroAdivinar)
        alert("Prueba con un numero mas bajo");
    }
    contadorIntentos++;
  }
  if (NumeroAdivinar == NumeroUsuario) {
    document.getElementById("mensaje").innerHTML +=
      "Correcto el numero era " +
      NumeroAdivinar +
      " Adivinaste en el " +
      contadorIntentos +
      " intento";
  } else {
    document.getElementById("mensaje").innerHTML +=
      "No lograste adivinar el Numero era " + NumeroAdivinar;
  }
} else if (pagina == "mundiales.html") {
  //Pagina de los años que Hubo Mundial FIFA {Tema: Itereciones con While}
  var AnioPrimerMundial = 1930;
  var AnioLimite = parseInt(prompt("Ingresa el año maximo para calcular"));
  while (AnioPrimerMundial <= AnioLimite) {
    imprimir("El hubo mundial FIFA en el AÑO " + AnioPrimerMundial);
    AnioPrimerMundial += 4;
  }
} else if (pagina == "tablasMultiplicar.html") {
  //Pagina de las tablas de Multiplicar {Tema:Iteraciones FOR}
  var multiplicador = 1;
  var tabla = parseInt(prompt("Ingrese la tabla que quiera calcular"));
  document.getElementById("titulotabla").innerHTML =
    "Tabla del " + tabla + " Usando While";
  while (multiplicador <= 12) {
    imprimir(tabla + " x " + multiplicador + "=" + tabla * multiplicador);
    multiplicador += 1;
  }
  // document.writeln("Tabla del "+ tabla+" Usando for");
  for (multiplicador; multiplicador < 12; multiplicador++) {
    imprimir(tabla + " x " + multiplicador + "=" + tabla * multiplicador);
  }
} else if (pagina == "promedios.html") {
  //Pagina Edades promedios {Tema:Acumulacion de variables}
  CantidadMiembros = parseInt(
    prompt("Ingrese la cantidad de miembros de la familia:")
  );
  var contador = 1;
  var TotalEdades = 0;
  while (contador <= CantidadMiembros) {
    edad = parseInt(prompt("Ingrese cantidad de miembro " + contador));
    TotalEdades = TotalEdades + edad;
    contador++;
  }
  imprimir(
    "El total de miembros es de " +
      CantidadMiembros +
      " y el Promedio es de " +
      TotalEdades / CantidadMiembros
  );
  ////////////////Numeros pares entre 1 y 100
  document.writeln("Numeros par entre 1 -100");
  var numeroactual = 1;
  var numeroMaximo = 100;
  while (numeroactual <= numeroMaximo) {
    if (numeroactual % 2 == 0) document.writeln(numeroactual + "<br>");
    numeroactual++;
  }
} else if (pagina == "juego_secreto.html") {
  //Juego Secreto Advina un numero{Tema:Manejo de interfaz, arreglos, botones y cajas de texto}
  function generarAleatorio() {
    return Math.round(Math.random() * 10);
  }
  function LlenarArreglo(cantidad) {
    var ArregloLleno = [];
    for (let index = 0; index <= cantidad; index++) {
      numerorandom = generarAleatorio();
      ArregloLleno.push(numerorandom);
    }
    return ArregloLleno;
  }
  var CantidadNumerosAGenerar= parseInt(prompt("Ingrese cantidad de numeros para adivinar"))
  var secretos =LlenarArreglo(CantidadNumerosAGenerar-1);

  //var numerosecreto = (Math.random() * 10).toFixed(0);
  var input = document.querySelector("input");
  input.focus();
  function verificar() {
    var encontrado = false;
    for (let posicion = 0; posicion < secretos.length; posicion++) {
      if (parseInt(input.value) == secretos[posicion]) {
        document.getElementById("resultado").innerHTML = "Usted acerto";
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      document.getElementById("resultado").innerHTML = "No adivino el numero";
      input.value = "";
      input.focus();
    }
  }
  var boton = document.querySelector("button");
  boton.onclick = verificar;
}
