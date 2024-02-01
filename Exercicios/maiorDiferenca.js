let numeros = [8, 11, 4, 1, 34, 1000, -2, 31203];

let maiorNumero = 0;

for (let contador = 0; contador < numeros.length; contador++) {

    var numero = numeros[contador];

    if (numero > maiorNumero) {
        maiorNumero = numero;
    }

}

console.log(maiorNumero);



let menorNumero = numeros[0];

for(let contador = 0; contador < numeros.length; contador++) {

    numero = numeros[contador];

    if (numero < menorNumero) {
        menorNumero = numero;
    }

}

console.log(menorNumero);