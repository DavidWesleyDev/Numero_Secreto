alert ('Boas vindas ao Jogo do Numero Secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto...EX: o chte não por igual o numero secreto            //!= Diferente... nessa situação represente while (chute!= )"Equanto o chute não for igual ao numero secreto, repetetir ate acertar "
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);

    //Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
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

//variavel palavraTentativa igual a, tentativa é maior que 1 ? caso tentativa for maior do que 1 eu vou colocar 'tentativas' se não 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'                              
alert(`Isso ai meu chapa quente! você descobriu o número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);






//if(tentativas > 1){
//    alert(`Isso ai meu chapa quente! você descobriu o número Secreto ${numeroSecreto} com ${tentativas} tentativas `);

//}else{
//    alert(`Isso ai meu chapa quente! você descobriu o número Secreto ${numeroSecreto} com ${tentativas} tentativa `);

//};




//operadores que estamos utilizando no codigo:
//NÃO É IGUAL: !=
//IGUAL: ==
//MAIOR: >
//PARA ATRIBUIR MAIS 1:++
//sempre que precisar pegar o valor de uma variável e incrementar 1 usamos o "++"
//Math.random() - função que dar um numero aleatorio de vai de 0 a 1 EX 0.65753275568728...
//Math.random() * 10 -funcão que dar um numero aleatorio que vai de 0 a 1 vezes 10 EX: 6.3252454542...
//parseInt função que pega somente o numero inteiro EX: 6