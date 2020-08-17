const variations = ["A", "B", "C"];
const possibilities = [];
const sequence = "";

for (i = 0; i < 1; i++) {
  for (j = 0; j < variations.length; j++) {
    let sequence = `${variations[j]}`;
    for (k = 0; k < variations.length; k++) {
      sequence += `${variations[k]}`;
      if (k == 0) {
        possibilities.push(sequence);
        sequence = `${variations[j]}`;
      } else {
        for (l = 0; l < variations.length - 1; l++) {
          sequence += `${variations[l]}`;
          possibilities.push(sequence);
          sequence = `${variations[j]}${variations[k]}`;
        }
        sequence = `${variations[j]}`;
      }
    }
  }
}

console.log(possibilities);
console.log(`${possibilities.length} variações`);
