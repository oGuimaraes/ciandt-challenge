const letras = ["A", "B", "C", "D", "E", "F"];
const possiveisSenhas = [];

for (i = 0; i < letras.length; i++) {
  let senha = "";
  senha = letras[i];
  for (j = 0; j < letras.length; j++) {
    if (i != j) {
      senha += letras[j];
      for (k = 0; k < letras.length; k++) {
        if (i != j && i != k && j != k) {
          if (i == 0 || j == 0 || k == 0) {
            if (i == 3 || j == 3 || k == 3) {
              senha += letras[k];
              for (l = 3; l <= 6; l += 3) {
                senha += l;
                for (m = 1; m <= 4; m++) {
                  senha += m;
                  for (n = 1; n <= 4; n++) {
                    if (l + m + n == 8) {
                      possiveisSenhas.push((senha += n));
                    }
                    senha = `${letras[i]}${letras[j]}${letras[k]}${l}${m}`;
                  }
                  senha = `${letras[i]}${letras[j]}${letras[k]}${l}`;
                }
                senha = `${letras[i]}${letras[j]}${letras[k]}`;
              }
            }
          }
          senha = `${letras[i]}${letras[j]}`;
        }
      }
      senha = `${letras[i]}`;
    }
  }
}
//for (a = 0; a < possiveisSenhas.length; a++) {
//  console.log(possiveisSenhas[a]);
//}

console.log(possiveisSenhas);
console.log(`Possibilidades: ${possiveisSenhas.length}`);
console.log(`${possiveisSenhas.length * 2} segundos`);
