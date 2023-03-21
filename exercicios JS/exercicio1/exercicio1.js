
  let nota;

do {
  nota = prompt("Digite uma número entre 0 e 10:");
} while (nota < 0 || nota > 10);

alert(`Nota válida: ${nota}`);