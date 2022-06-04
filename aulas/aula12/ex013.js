var agora = new Date() // pegando a hora do sistema
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)
if (horas < 6){
    console.log('Boa Madrugada!')
} else if (horas < 12){
    console.log('Bom dia!')
} else if (horas <= 18){
    console.log('Boa tarde!')
} else{console.log('Boa noite!')}