const variations = ["A", "B", "C"];
const possibility = [];
const sequence = "";

for (i = 0; i < 1; i++) {
  for (j = 0; j < variations.length; j++) {
    let sequence = variations[j];
    for (k = 0; k < variations.length; k++) {
      sequence += variations[k];
      if (k == 0) {
        possibility.push(sequence);
        sequence = `${variations[j]}`;
      } else {
        for (l = 0; l < variations.length - 1; l++) {
          sequence += variations[l];
          possibility.push(sequence);
          sequence = `${variations[j]}${variations[k]}`;
        }
        sequence = variations[j];
      }
    }
  }
}

console.log(possibility);
console.log(possibility.length);
