/* Calcula média ponderada */
var n1 = prompt("Qual a sua primeira nota?");
var p1 = prompt("Qual seu primeiro peso?");
var n2 = prompt("Qual a sua segunda nota?");
var p2 = prompt("Qual seu segundo peso?");
var n3 = prompt("Qual a sua terceira nota?");
var p3 = prompt("Qual seu terceiro peso?");

var mp = Number(((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3));
alert("o resultado é " + mp);
