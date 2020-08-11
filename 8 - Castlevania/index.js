countMoviments();

function countMoviments() {
  const nDisk = 10;

  let nMoviments = 0;

  function moveDisk(n, initalPin, endPin, auxPin) {
    if (n > 0) {
      moveDisk(n - 1, initalPin, auxPin, endPin);
      nMoviments++;
      moveDisk(n - 1, auxPin, endPin, initalPin);
    }
  }

  moveDisk(nDisk, 1, 3, 2);
  console.log(
    `É necessário fazer no mínimo ${nMoviments} movimentos para mover todos os ${nDisk} discos para o pino da direita.`
  );
}
