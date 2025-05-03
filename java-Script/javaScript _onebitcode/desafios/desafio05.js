/* Crie um programa que solicita ao usúario que insira notas de alunos e, quando ele inserir -1, o programa calcula é exibe a média das notas */

const nota1 = parseFloat(prompt("digite a primera nota"))

const nota2 = parseFloat(prompt("digite a segunda  nota"))

const nota3 = parseFloat(prompt("digite a terceira nota"))

media = ( nota1 + nota2 + nota3 ) / 3 -1

alert(` O resultado foi ${media}`)