function calcularSomaeMedia(n1, n2, n3, n4) {
    let soma = n1 + n2 + n3 + n4
    console.log ("A soma é; " + soma);

    let media = soma /4;
    console.log ("A media é: " + media);

    return 'Feito!'
}

console.log (calcularSomaeMedia (21, 22, 23, 24))