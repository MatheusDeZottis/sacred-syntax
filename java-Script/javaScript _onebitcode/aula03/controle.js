const idade = parseFloat(prompt('Quantos anos você tem?'))

if (idade >= 18 && idade < 60) {
    alert('Você é maior de idade.')
} else if (idade >= 60) {
    alert('Você é idoso.')
} else {
    alert('Você é menor de idade.')
}
