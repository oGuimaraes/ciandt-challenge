function calculadoraFrenagem(velocidade, coefAtrito) {
  const distanciaParaFrenagem = Math.pow(velocidade, 2) / (250 * coefAtrito);
  return distanciaParaFrenagem;
}

console.log(`${calculadoraFrenagem(260, 1)} metros`);
