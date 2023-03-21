let usuario, senha;

do {
  usuario = prompt("Digite o nome de usuário:");
  senha = prompt("Digite a senha:");
  
  if (senha === usuario) {
    alert("A senha não pode ser igual ao nome de usuário. Tente novamente.");
  }
} while (senha === usuario);

alert("Usuário e senha cadastrados com sucesso!");