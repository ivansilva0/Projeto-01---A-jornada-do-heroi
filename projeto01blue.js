console.clear();
console.log('Ivan terá uma apresentação no trabalho e precisa chegar mais cedo para apresentar um projeto que, se bem apresentado e seus chefes gostarem, Ivan será promovido e terá um aumento no seu salário, porém houve um imprevisto, o pneu do carro furou!');
let prompt = require('prompt-sync')();

console.log();
console.log('Responda as perguntas a seguir usando "s" para SIM e "n" para NÃO.');
console.log();

let soma = 0;

let pergunta1 = prompt('Ivan conseguiu achar um borracheiro para consertar seu pneu? ').toLowerCase();
while (pergunta1 != 's' && pergunta1 != 'n'){
    console.log('Resposta inválida!');
    pergunta1 = prompt('Ivan conseguiu achar um borracheiro? para consertar seu pneu? ').toLowerCase();
}

if (pergunta1 == 's'){
    soma++
}

console.log();
let pergunta2 = prompt('Ivan conseguiu chegar a tempo no seu trabalho? ').toLowerCase();
while (pergunta2 != 's' && pergunta2 != 'n'){
    console.log('Resposta inválida!');
    pergunta2 = prompt('Ivan conseguiu chegar a tempo no seu trabalho? ').toLowerCase();
}

if (pergunta2 == 's'){
    soma++
}

console.log();
let pergunta3 = prompt('Ivan conseguiu realizar sua apresentação? ').toLowerCase();
while (pergunta3 != 's' && pergunta3 != 'n'){
    console.log('Resposta inválida!');
    pergunta3 = prompt('Ivan conseguiu realizar sua apresentação? ').toLowerCase();
}

if (pergunta3 == 's'){
    soma++
}

console.log();
let pergunta4 = prompt('Ivan agradou seus chefes? ').toLowerCase();
while (pergunta4 != 's' && pergunta4 != 'n'){
    console.log('Resposta inválida!');
    pergunta4 = prompt('Ivan agradou seus chefes?  ').toLowerCase();
}

if (pergunta4 == 's'){
    soma++
}

console.log();
let pergunta5 = prompt('Ivan foi promovido? ').toLowerCase();
while (pergunta5 != 's' && pergunta5 != 'n'){
    console.log('Resposta inválida!');
    pergunta5 = prompt('Ivan foi promovido? ').toLowerCase();
}

if (pergunta5 == 's'){
    soma++
}

console.log();
if (soma == 0){
    console.log('Ivan falhou miseravelmente na apresentação do seu trabalho!');
} else if (soma == 1 || soma == 2){
    console.log('Ivan falhou, mas ainda conseguiu se manter no emprego.');
}else if (soma == 3){
    console.log('Ivan chegou perto de conseguir sua promoção, mas acabou falhando por pouco.');
} else if (soma == 4){
    console.log('Depois de muito esforço Ivan consegue um pequeno aumento no seu salário, mas a promoção ficou para a próxima.');
} else if (soma == 5){
    console.log('Ivan triunfa de maneira inquestionável na apresentação do trabalho, conseguindo seu aumento de salário e tambem sua promoção.');
}
console.log();