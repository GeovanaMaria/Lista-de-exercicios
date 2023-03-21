let populacaoA = 80000;
let populacaoB = 200000;
let taxaCrescimentoA = 0.03;
let taxaCrescimentoB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}

alert(`Levará ${anos} anos para que a população de A ultrapasse ou iguale a população de B.`);

