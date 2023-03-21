let nome, idade, salario, sexo, estadoCivil;

while (true) {
  nome = prompt("Digite o nome (maior que 3 caracteres): ");
  if (nome.length > 3) {
    break;
  }
  alert("Nome inválido, tente novamente.");
}

while (true) {
  idade = parseInt(prompt("Digite a idade (entre 0 e 150): "));
  if (idade >= 0 && idade <= 150) {
    break;
  }
  alert("Idade inválida, tente novamente.");
}

while (true) {
  salario = parseFloat(prompt("Digite o salário (maior que zero): "));
  if (salario > 0) {
    break;
  }
  alert("Salário inválido, tente novamente.");
}

while (true) {
  sexo = prompt("Digite o sexo (f ou m): ");
  if (sexo === "f" || sexo === "m") {
    break;
  }
  alert("Sexo inválido, tente novamente.");
}

while (true) {
  estadoCivil = prompt("Digite o estado civil (s, c, v ou d): ");
  if (estadoCivil === "s" || estadoCivil === "c" || estadoCivil === "v" || estadoCivil === "d") {
    break;
  }
  alert("Estado civil inválido, tente novamente.");
}

alert("Dados válidos:\n Nome = " + nome + "\n Idade = " + idade + "\n Salário = " + salario + "\n Sexo = " + sexo + "\n Estado civil = " + estadoCivil);