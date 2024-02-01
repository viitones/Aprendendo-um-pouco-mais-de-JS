 // const numeros = [2, 3, 4, 6];

// let soma = 0;

// for(let numero of numeros){
//     soma += numero;
// }

// console.log(soma);

// const letras = ["A", "a", "B", "b", "C", "z", "e", "E"];

// let resultado = 0;

// for(let letra of letras){
//     if(letra == "E" || letra == "e"){
//         resultado++
//     }
// }

// if(resultado > 0){
//     console.log(`Foram encontradas ${resultado} letras E ou e`);
// }
// else{
//     console.log("Nenhuma letra E ou e foi encontradas");
// }


const original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for(let numero of original){
    if(numero %2 === 0){
        pares.push(numero)
    }else{
        impares.push(numero)
    }
}

console.log(pares);
console.log(impares);