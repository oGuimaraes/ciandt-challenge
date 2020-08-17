const all = 1000;

/* Yoshi Island */
const y = 450;

/* Chocolate Island */
const ch = 330;

/* Cookie Moutain */
const co = 340;

const yANDch = 200;
const yANDcoo = 180;
const chANDco = 100;

const yANDcooANDchoco = 30;

calculate();

function calculate() {
  const A =
    y -
    (yANDch - yANDcooANDchoco) -
    (yANDcoo - yANDcooANDchoco) -
    yANDcooANDchoco;

  const B =
    ch -
    (yANDch - yANDcooANDchoco) -
    (chANDco - yANDcooANDchoco) -
    yANDcooANDchoco;

  const C =
    co -
    (yANDcoo - yANDcooANDchoco) -
    (chANDco - yANDcooANDchoco) -
    yANDcooANDchoco;

  const D =
    A +
    B +
    C +
    yANDcooANDchoco +
    (yANDch - yANDcooANDchoco) +
    (chANDco - yANDcooANDchoco) +
    (yANDcoo - yANDcooANDchoco);

  const likesOneLocation = A + B + C;
  const dontLikeAny = all - D;
  console.log(
    `Há ${dontLikeAny} yoshis que não gostam de nenhuma locadlida & ${likesOneLocation} que gostam apenas de uma localidade.`
  );
}
