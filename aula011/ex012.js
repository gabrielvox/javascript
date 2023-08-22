/*var idade = 14
if (idade < 16) {
    console.log ('Nao vota')
} else {
    if (idade < 18){
        console.log ('Voto opcional')
    } else {
        console.log('Voto OBRIGATORIO')
    }
}*/






var idade = 50
if (idade < 16) {
    console.log ('Nao vota')
} else if (idade < 18 || idade > 65){
        console.log ('Voto opcional')
    } else{
        console.log('Voto OBRIGATORIO')
    }



/*var idade = 15   ////////////////////ERRO DE LOGICA AQUI, Somente si idade é menor que 18 é testado, assumindo o valor TRUE e imprimindo ('opcional')

if (idade < 18) {
    console.log (' opcional')
} else if (idade < 16){
        console.log ('nao vota')
    } 
    
    else{
        console.log('Voto OBRIGATORIO')
    }*/
