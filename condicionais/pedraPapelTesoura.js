let jogador1 = "Pedra";

let jogador2 = "sd";

let jogadas = ["Pedra", "Papel", "Tesoura"];

let erro = !jogadas.includes(jogador1) || !jogadas.includes(jogador2);;

if (erro) {
    console.log("Valor inválido");
}
else{
    if (jogador1 === jogador2) {
        console.log("empate");
    } 
    else if (jogador1 == "Pedra" && jogador2 == "tesoura" || jogador1 == "Papel" && jogador2 == "Pedra" || jogador1 == "Tesoura" && jogador2 == "Papel") {
        console.log("jogador1 ganhou");
    }
    else{
        console.log("jogador2 ganhou");
    }
}