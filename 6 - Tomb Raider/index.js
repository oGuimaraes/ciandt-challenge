const letras = ["A", "B", "C", "D", "E", "F"];
const possiveisSenhas = [];

for (i = 0; i < letras.length; i++) {
  let senha = "";
  senha = letras[i];
  //console.log(senha);
  for (j = 0; j < letras.length; j++) {
    //console.log(`${senha}${letras[j]}`);
    //possiveisSenhas.push((senha += letras[j]));
    senha += letras[j];
    //console.log(senha);
    for (k = 0; k < letras.length; k++) {
      possiveisSenhas.push((senha += letras[k]));
      senha = `${letras[i]}${letras[j]}`;
    }
    senha = letras[i];
  }
}
for (a = 0; a < possiveisSenhas.length; a++) {
  console.log(possiveisSenhas[a]);
}
console.log(possiveisSenhas.length);
