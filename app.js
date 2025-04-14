alert ('Boas vindas ao Jogo do Numero Secreto!');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto...EX: o chte não por igual o numero secreto            //!= Diferente... nessa situação represente while (chute!= )"Equanto o chute não for igual ao numero secreto, repetetir ate acertar "
while(chute != numeroSecreto){
    chute = prompt('Escolha um número de 1 a 10');

    //Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai meu chapa quente! você descobriu o número Secreto ${numeroSecreto} com ${tentativas} tentativas `);
        console.log(`Isso ai meu chapa quente! você descobriu o ${númeroSecreto}`);
    }else{

        if(chute > numeroSecreto){
            alert (`O número secreto é menor que ${chute}`);
        }else {
            alert(`O número secreto é maior que ${chute}`);

        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
};




//operadores que estamos utilizando no codigo:
//NÃO É IGUAL: !=
//IGUAL: ==
//MAIOR: >
//PARA ATRIBUIR MAIS 1:++
//sempre que precisar pegar o valor de uma variável e incrementar 1 usamos o "++"