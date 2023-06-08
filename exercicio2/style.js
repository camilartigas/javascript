/* Calculadora de IMC */
var peso = prompt("Qual é o seu peso em Kg?");
var altura = prompt("Qual a sua altura em m?");
var imc = Number(peso/(Math.pow(altura,2)));
/*alert("o resultado é " + imc);*/
if(imc<18.5){
    alert("Você está muito magro(a)!");
}
else if(imc >=18.5 && imc <=24.9){
    alert("Você está no peso ideal!!! Parabéns!");
}
else if(imc >=25 && imc <=29.9){
    alert("Você está com sobrepeso!");
}
else if(imc >=30 && imc <=34.9){
    alert("Você está com obesidade grau I");
}
else{
    alert("Você está com obesidade grau II");
}