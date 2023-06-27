let contador = 1;
let numero = 17;
let cont = 0;

do {
    if (numero % contador == 0) {
        cont ++;
        
    } else {
        
    }
    contador++;
} while (contador < numero);


if (cont < 2) {
     console.log("Este número é primo");
 } else {
     console.log("Este número não é primo");
 }
