function calculadoraFrenagem(velocidade, coefAtrito) {
  const distanciaParaFrenagem = Math.pow(velocidade, 2) / (250 * coefAtrito);
  console.log(Math.pow(velocidade, 2));
  return distanciaParaFrenagem;
}

console.log(`${calculadoraFrenagem(260, 1)} metros`);
