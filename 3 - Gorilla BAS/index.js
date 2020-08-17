function distanciaHorizontal(velocidadeKMh, angulo, tempoEmSegundos) {
  // Converte Km/h para M/s
  const vMs = velocidadeKMh / 3.6;

  // Decomposição da velocidade
  const Vx = vMs * Math.cos((angulo * Math.PI) / 180);

  // Formula da distância percorrida: D = v * t
  const distanciaHorizontal = Vx * tempoEmSegundos;
  return distanciaHorizontal;
}

console.log(distanciaHorizontal(80, 45, 5));
