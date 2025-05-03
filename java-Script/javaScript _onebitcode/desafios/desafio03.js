/* Escreva um programa que seja capaz de calcular a área e o perímetro de um triãngulo. O usuário deve inserir as informações necessárias e o programa exibirá os resultados */


let base = parseFloat(prompt("Digite o comprimento da base: "))
let altura = parseFloat(prompt("Digite a altura: "))
let lado1 = parseFloat(prompt("Digite o comprimento do lado 1: "))
let lado2 = parseFloat(prompt("Digite o comprimento do lado 2: "))
let lado3 = parseFloat(prompt("Digite o comprimento do lado 3: "))


let area = (base * altura) / 2

let perimetro = lado1 + lado2 + lado3


console.log("\nResultados:");
console.log("Área do triângulo:", area)
console.log("Perímetro do triângulo:", perimetro)
