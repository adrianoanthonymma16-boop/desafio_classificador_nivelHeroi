let nomeHeroi = prompt("Digite o nome do herói:");
let nivelHeroi = 5000;
let classificacaoHeroi = ""

console.log("___SISTEMA DE CLASSIFICAÇÃO DE HEROI___")
switch (true) {
    case (nivelHeroi <= 1000):
        classificacaoHeroi = "Ferro";
        break;
    case (nivelHeroi >= 1001 && nivelHeroi <= 2000):
        classificacaoHeroi = "Bronze";
        break;
    case (nivelHeroi >= 2001 && nivelHeroi <= 5000):
        classificacaoHeroi = "Prata";
        break;
    case (nivelHeroi >= 5001 && nivelHeroi <= 8000):
        classificacaoHeroi = "Platina diamante";
        break;
    case (nivelHeroi >= 8001 && nivelHeroi <= 9000):
        classificacaoHeroi = "Ascendente";
        break;
    case (nivelHeroi >= 9001 && nivelHeroi <= 10000):
        classificacaoHeroi = "Imotal";
        break;
    case (nivelHeroi >= 10001):
        classificacaoHeroi = "Radiante";
        break;
}

console.log("O heroi de nome " + nomeHeroi + "Tem como classificação o nível: " + classificacaoHeroi)