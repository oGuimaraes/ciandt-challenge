const letras = ["A", "B", "C", "D", "E", "F"];
const possiveisSenhas = [];

/* Os 3 primeiros laços (for) definem os 3 caracteres hexadecimais */
for (i = 0; i < letras.length; i++) {
  let senha = "";
  /* Adiciona o 1º caractere na senha */
  senha = letras[i];
  for (j = 0; j < letras.length; j++) {
    /* Adiciona o 2º caractere na senha */
    senha += letras[j];
    for (k = 0; k < letras.length; k++) {
      /* Verifica se nenhuma letra é repetida */
      if (i != j && i != k && j != k) {
        /* Verifica se a senha possui os caracteres A e D */
        if (i == 0 || j == 0 || k == 0) {
          if (i == 3 || j == 3 || k == 3) {
            /* Adiciona o 3º caractere na senha */
            senha += letras[k];
            /* Os 3 laços abaixo definem os dígitos de acordo as pistas informadas */
            for (l = 3; l <= 6; l += 3) {
              senha += l;
              for (m = 1; m <= 4; m++) {
                senha += m;
                for (n = 1; n <= 4; n++) {
                  /* Verifica se a soma dos digitos é igual a 8 */
                  if (l + m + n == 8) {
                    /* Armazena a senha no vetor de possíveis senhas */
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
//for (a = 0; a < possiveisSenhas.length; a++) {
//  console.log(possiveisSenhas[a]);
//}

console.log(possiveisSenhas);
console.log(`Possibilidades: ${possiveisSenhas.length}`);
console.log(`${possiveisSenhas.length * 2} segundos`);
