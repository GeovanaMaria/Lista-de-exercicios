// Lendo os 5 números
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i+1}º número:`));
    numeros.push(numero);
  }
  
  // Calculando a soma dos números
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  
  // Calculando a média dos números
  let media = soma / numeros.length;
  
  // Imprimindo o resultado
  alert(`A soma dos números é: ${soma}`);
  alert(`A média dos números é: ${media}`)