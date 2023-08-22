function verificar() {
   var data = new Date() // data recebe funcao para datas
   var ano = data.getFullYear() //ano recebe a dada fornecida pelo sistema
   var fano = document.getElementById('txtano') //fano recebe o q foi digitado no input de ano
   var res = document.querySelector('div#res') //res recebe a div chamada res: assim pode alterar tudo dentro dela
   if (fano.value.length == 0 || Number(fano.value) > ano) { //si valor do ano for 0 ou maior q ano atual
    window.alert('ERRO!!! Entrada incorreta.') //dispara esse alerta
    }  else{ //se nao for entao executa oq vem a seguir
        var fsex = document.getElementsByName('radsex') //fsex recebe os radios. no caso os 2 q existem
        var idade = ano - Number(fano.value) //aqui idade recebe o ano definido pelo sistema e subtrai do q foi fornecido pelo cliente
        var genero ='' //aqui so cria uma variavel para receber o texto q vai ser testado a baixo
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (fsex[0].checked){ //si fsex for verdade para a posicao 0 entao variavel genero recebe homem
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'kid-homem.jpg')
                //crianca
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'ad-homem.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '../imagens/homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'velho-homem.jpg')
            }

        
        } else if (fsex[1].checked){ //si nao for verdade q o cheked seja na posicao 0, entao genero recebe mulher, ou com o IF ELSE e testado novamente si esta na posicao 1, e genero so vai receber texto si for verdade. caso exista a posicao 2 genero nao vai receber nada
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'kid-mulher.jpg')
                //crianca
            } else if (idade < 21) {
                img.setAttribute('src', 'ad-mulher.jpg')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src', 'mulher.jpg')
                //adulto
            } else {
                //Idoso
                img.setAttribute('src', 'velha-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade: ${idade} \n Genero: ${genero}` 
        res.appendChild(img)
        
    }
}
