function verificar() {

var inicio = document.getElementById('idinicio')
var fim = document.getElementById('idfim')
var passo = document.getElementById('idpasso')
var res = document.querySelector('div#res')


if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO]')
} else {
    res.innerHTML = `Resultado da soma: <br>`;
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < f){
        //contangem crescente
        for ( let c = i; c <= f; c+=p){
            res.innerHTML += `${c} - `
    }
        
    }else {
        //contagem regressiva
        for ( let c = i; c >= f; c-=p){
        res.innerHTML += `:${c} `
     }
     res.innerHTML += `${c} - `
    }

}












}/*var passo = document.getElementById('idpasso')*/