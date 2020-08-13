const letras = ["A", "B", "C", "D", "E", "F"];
const possiveisSenhas = [];

for (i = 0; i < letras.length; i++) {
  let senha = "";
  senha = letras[i];
  for (j = 0; j < letras.length; j++) {
    senha += letras[j];
    for (k = 0; k < letras.length; k++) {
      senha += letras[k];
      for (l = 1; l <= 9; l++) {
        senha += letras[i];
        for (m = 1; m <= 9; m++) {
          possiveisSenhas.push((senha += m));
          senha = `${letras[i]}${letras[j]}${letras[k]}${l}`;
        }
        senha = `${letras[i]}${letras[j]}${letras[k]}`;
      }
      senha = `${letras[i]}${letras[j]}`;
    }
    senha = `${letras[i]}`;
  }
}
/*for (a = 0; a < possiveisSenhas.length; a++) {
  console.log(possiveisSenhas[a]);
}
*/
console.log(possiveisSenhas);
console.log(possiveisSenhas.length);
