var numero = 10;
var resultado = document.querySelector('div#res');

function diminuir() {
   
   while( numero >= 5) {
   


    numero = numero - 1;
   resultado.innerHTML = `Resultado: ${numero}`;
} 
    resultado.innerHTML = `Final do while`;
}
// O problema no seu código é que você está atualizando o conteúdo da div dentro do loop while. Isso faz com que o resultado seja atualizado rapidamente e você só veja a mensagem "Final do while" no final.

