const letters = ["A", "B", "C", "D", "E", "F"];
const possiblePass = [];

/* Os 3 primeiros laços (for) definem os 3 caracteres hexadecimais */
for (i = 0; i < letters.length; i++) {
  let currentPass = "";
  /* Adiciona o 1º caractere na currentPass */
  currentPass = letters[i];
  for (j = 0; j < letters.length; j++) {
    /* Adiciona o 2º caractere na currentPass */
    currentPass += letters[j];
    for (k = 0; k < letters.length; k++) {
      /* Verifica se nenhuma letra é repetida */
      if (i != j && i != k && j != k) {
        /* Verifica se a currentPass possui os caracteres A e D */
        if (i == 0 || j == 0 || k == 0) {
          if (i == 3 || j == 3 || k == 3) {
            /* Adiciona o 3º caractere na currentPass */
            currentPass += letters[k];
            /* Os 3 laços abaixo definem os dígitos de acordo as pistas informadas */
            for (l = 3; l <= 6; l += 3) {
              currentPass += l;
              for (m = 1; m <= 4; m++) {
                currentPass += m;
                for (n = 1; n <= 4; n++) {
                  /* Verifica se a soma dos digitos é igual a 8 */
                  if (l + m + n == 8) {
                    /* Armazena a currentPass no vetor de possíveis currentPasss */
                    possiblePass.push((currentPass += n));
                  }
                  currentPass = `${letters[i]}${letters[j]}${letters[k]}${l}${m}`;
                }
                currentPass = `${letters[i]}${letters[j]}${letters[k]}${l}`;
              }
              currentPass = `${letters[i]}${letters[j]}${letters[k]}`;
            }
          }
        }
        currentPass = `${letters[i]}${letters[j]}`;
      }
    }
    currentPass = `${letters[i]}`;
  }
}

for (i = 0; i < possiblePass.length; i++) {
  console.log(possiblePass[i]);
}

console.log(
  `Com ${possiblePass.length} possibilidades ela demoraria em torno de ${
    possiblePass.length * 2
  } segundos para testar todas as combinações.`
);
