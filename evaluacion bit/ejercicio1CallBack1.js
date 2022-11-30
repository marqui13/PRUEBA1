

function multiplicaPorSiMismo(valor) {
  console.log(`Inicia ejecución: el Valor es = ${valor}`);
  return new Promise((resolve, reject) =>
    setTimeout(function () {
      resolve(ejecuta(valor, valor * valor));
      //ejecuta(2,2*2)
    }, 1000)
  );
}

function ejecuta(valor, resultado) {
  console.log(
    `Ejecutando: el Valor es = ${valor} y el resultado es = ${resultado}`
  );
}
multiplicaPorSiMismo(2);
console.log("Procesando");


