// array
let numeros = [8, 11, 4, 1, 123, 3, 7, 8, -2];


// achar maior numero

let maiorNumero = 0;

for (let contador = 0; contador < numeros.length; contador++) {

    var numero = numeros[contador];

    if (numero > maiorNumero) {
        maiorNumero = numero;
    }

}

// console.log(maiorNumero);



// achar menor numero

let menorNumero = numeros[0];

for(let contador = 0; contador < numeros.length; contador++) {

    numero = numeros[contador];

    if (numero < menorNumero) {
        menorNumero = numero;
    }

}

// console.log(menorNumero);



// calcular a diferença entre eles

let diferenca = maiorNumero - Math.abs(menorNumero);

console.log(`A maior diferença é ${diferenca}, pois:\n ${maiorNumero} - ${menorNumero} = ${diferenca}`);