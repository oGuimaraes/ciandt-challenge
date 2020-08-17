let arr = [];
let actualNumber = 1;
let itemsInLine = 1;
let line = 0;
const anoInauguracaoEstacao = 1969;

while (actualNumber < anoInauguracaoEstacao) {
  arr = new Array();
  line++;
  for (j = 1; j <= itemsInLine; j++) {
    arr.push(actualNumber);
    actualNumber++;
    if (actualNumber > anoInauguracaoEstacao) {
      break;
    }
  }
  itemsInLine += 2;
}
console.log(
  `O número ${anoInauguracaoEstacao} foi encontrado na linha ${line}.`
);
