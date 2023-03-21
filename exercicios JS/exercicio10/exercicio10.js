let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;

do {
  populacaoA = parseInt(prompt("Informe a população do país A:"));
} while (isNaN(populacaoA) || populacaoA < 1);

do {
  populacaoB = parseInt(prompt("Informe a população do país B:"));
} while (isNaN(populacaoB) || populacaoB < 1);

do {
  taxaCrescimentoA = parseFloat(prompt("Informe a taxa de crescimento anual da população do país A (em decimal):"));
} while (isNaN(taxaCrescimentoA) || taxaCrescimentoA <= 0);

do {
  taxaCrescimentoB = parseFloat(prompt("Informe a taxa de crescimento anual da população do país B (em decimal):"));
} while (isNaN(taxaCrescimentoB) || taxaCrescimentoB <= 0);

let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}

alert(`Levará ${anos} anos para que a população de A ultrapasse ou iguale a população de B.`);

let resposta;

do {
  resposta = prompt("Deseja repetir a operação? (S/N)").toUpperCase();
} while (resposta !== "S" && resposta !== "N");

if (resposta === "S") {
  location.reload();
}