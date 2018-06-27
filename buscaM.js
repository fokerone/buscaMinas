function creaTablero(tam) {
  var matriz = new Array(tam);
  for (var i = 0; i < tam; i++) {
    matriz[i] = new Array(tam);
  }
  return matriz;
}

function colocarMinas(cantidad, caracter, tablero) {
  let tam = tablero.length
  let ranCol = 0;
  let ranFil = 1;
  let colocadas = 0;

  if (cantidad < (tam * tam)) {
    //Colocar Minas aleatoriamente
    do {
      ranCol = getRandom(0, tam);
      ranFil = getRandom(0, tam);
      if (tablero[ranCol][ranFil] != caracter) {
        tablero[ranCol][ranFil] = caracter;
        colocadas++;
      }

    }
    while (colocadas < cantidad)

    //Rellenar tablero
    for (var i = 0; i < tam; i++) {
      for (var j = 0; j < tam; j++) {
        if (tablero[i][j] != "#") {
          tablero[i][j] = "*";
        }
      }
    }
  } else {
    console.log("El numero de minas no puede ser mayor al del tablero");
  }

  return console.log(tablero);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


colocarMinas(25, "#", creaTablero(10));
