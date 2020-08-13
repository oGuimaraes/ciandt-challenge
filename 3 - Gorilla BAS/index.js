/*Math.cos((45 * Math.PI) / 180)*/

//console.log((Math.PI * 45) / 180);

//console.log(Math.PI);

console.log(distanciaHorizontal(80, 45, 5));

function distanciaHorizontal(velocidadeKMh, angulo, tempoEmSegundos) {
  // Converte Km/h para M/s
  const vMs = velocidadeKMh / 3.6;

  console.log(vMs);

  // Decomposição da velocidade
  const Vx = vMs * Math.cos((angulo * Math.PI) / 180);

  console.log(Vx);

  // Formula da distância percorrida: D = v * t
  const distanciaHorizontal = Vx * tempoEmSegundos;
  return distanciaHorizontal;
}
