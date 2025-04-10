alert ('Boas vindas ao Jogo do Numero Secreto!');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt('Escolha um número de 1 a 10');

//Se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai meu chapa quente! você descobriu o número Secreto ${numeroSecreto} `);
    console.log(`Isso ai meu chapa quente! você descobriu o ${númeroSecreto}`);
}else{
    alert(`O numero secreto era ${numeroSecreto}`)
    console.log('Errou!');
}