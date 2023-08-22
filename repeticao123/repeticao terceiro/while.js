var numero = 1;
var resultado = document.querySelector('div#res');

function diminuir() {
   
   while( numero <= 5) {
   
    numero ++


   resultado.innerHTML = `Resultado: ${numero}`;
   resultado.appendChild(numero)
} 
    resultado.innerHTML = `Final do while`;
} //resultado.innerHTML = `acabou`;
 // o appendChild resolveu  o problema do loop rapido demais *BREAK* deve exister outra solucao

