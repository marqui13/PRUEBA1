Ejercicio2 

function asincrono(valor, ejecucion) {
  console.log(`Inicia ejecución: el Valor es = ${valor}`);
  return new Promise((resolve, reject) => {
    return resolve(
      setTimeout(function () {
        ejecucion(valor, valor * valor);
      }, 0 | (Math.random() * 100))
    );
  });
}
var max = 10;
var cnt = 0;

let resultado = async function (valor, cuadrado) {
  console.log(
    `Termina ejecución: el Valor es = ${valor} y su cuadrado es = ${cuadrado}`
  );
  if (++cnt == max) {
    console.log("Fin de la ejecución");
  }
};

for (var i = 0; i < max; i++) {
  asincrono(i, resultado).then(() => console.log("Éxito"));
}