
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} Horas`)

if (hora >= 6 && hora < 12) {
    console.log('Ainda é de manha')
} else if (hora >= 12 && hora <= 18) {
    console.log('Agora ja é a tarde')
} else if (hora > 18 && hora <= 23) {
    console.log('Ja é noite')
} else if (hora == 0 || hora <= 5) {
    console.log('Agora é madrugada')
} else {
    
    console.log('nada')
}













/* var jhj = 
console.log(`Agora sao ${hora} Horas`)

if (hora < 12) {
    console.log('Ainda é de manha')
} else if (hora <= 18) {
    console.log('Agora ja é a tarde')
} else if (hora < 23) {
    console.log('Ja é noite')
} 
 else {
    var hora = ('XXXX')
    console.log('Hora nao existe')
    console.log(hora)
}*/