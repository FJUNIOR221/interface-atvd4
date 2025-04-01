// Entrada de 3 números reais entre 0 e 100

const prompt = require("prompt-sync")({sigint:true})

const num1 = prompt("Digite o primeiro número (entre 0 e 100):");
const num2 = prompt("Digite o segundo número (entre 0 e 100):");
const num3 = prompt("Digite o terceiro número (entre 0 e 100):");
 
// Verificação se os números estão entre 0 e 100
if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100 && num3 >= 0 && num3 <= 100) {
    const media = (num1 + num2 + num3) / 3; // Cálculo da média
    alert("A média aritmética é: " + media);
} else {
    alert("Os números devem estar entre 0 e 100.");
}

 // part 2
 // Entrada de 3 números reais entre 0 e 100
const num1 = Number(prompt("Digite o primeiro número (entre 0 e 100):"));
const num2 = Number(prompt("Digite o segundo número (entre 0 e 100):"));
const num3 = Number(prompt("Digite o terceiro número (entre 0 e 100):"));

// Verificação se os números estão entre 0 e 100
if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100 && num3 >= 0 && num3 <= 100) {
    const media = (num1 + num2 + num3) / 3; // Cálculo da média
    alert("A média aritmética é: " + media);
} else {
    alert("Os números devem estar entre 0 e 100.");
}

 // part 3
 // Entrada dos 3 valores e pesos
const valor1 = Number(prompt("Digite o primeiro valor (entre 0 e 10):"));
const valor2 = Number(prompt("Digite o segundo valor (entre 0 e 10):"));
const valor3 = Number(prompt("Digite o terceiro valor (entre 0 e 10):"));

const peso1 = Number(prompt("Digite o peso do primeiro valor (entre 0 e 1):"));
const peso2 = Number(prompt("Digite o peso do segundo valor (entre 0 e 1):"));
const peso3 = Number(prompt("Digite o peso do terceiro valor (entre 0 e 1):"));

// Verificação se os valores estão entre 0 e 10, e a soma dos pesos é igual a 1
if (valor1 >= 0 && valor1 <= 10 && valor2 >= 0 && valor2 <= 10 && valor3 >= 0 && valor3 <= 10 && 
    peso1 >= 0 && peso1 <= 1 && peso2 >= 0 && peso2 <= 1 && peso3 >= 0 && peso3 <= 1 && 
    (peso1 + peso2 + peso3) === 1) {

    const mediaPonderada = (valor1 * peso1 + valor2 * peso2 + valor3 * peso3); // Cálculo da média ponderada
    alert("A média ponderada é: " + mediaPonderada);
} else {
    alert("Os valores devem estar entre 0 e 10, e a soma dos pesos deve ser igual a 1.");
}
 //part 4
 // Entrada de um número inteiro
const numero = Number(prompt("Digite um número inteiro:"));

// Verificação se o número é par ou ímpar
if (numero % 2 === 0) {
    alert("O número " + numero + " é par.");
} else {
    alert("O número " + numero + " é ímpar.");
}
