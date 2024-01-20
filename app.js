alert("Bem-vindo ao jogo do número secreto!");

let numeroMaximo = 1000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

//Enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto){
        break;
    } 
    else {
        if (chute > numeroSecreto){
        alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

