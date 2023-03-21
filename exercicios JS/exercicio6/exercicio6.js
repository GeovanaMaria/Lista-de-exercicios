let numeros = [];

// Lendo os 5 números
for (let i = 0; i < 5; i++) {
  let numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
  numeros.push(numero);
}

// Encontrando o maior número
let maiorNumero = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

// Imprimindo o resultado
alert(`O maior número é: ${maiorNumero}`);