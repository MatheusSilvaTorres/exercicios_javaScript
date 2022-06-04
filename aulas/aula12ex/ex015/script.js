function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    msg.innerHTML = `Agora são ${horas}:${minutos} hrs! `
    if (horas >= 0 && horas < 12){
        msg.innerHTML += 'Bom dia!'
        img.src = 'fotoManha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horas >= 12 && horas <=18){
        msg.innerHTML += 'Boa tarde!'
        img.src = 'fotoTarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        msg.innerHTML += 'Boa noite!'
        img.src = 'fotoNoite.jpg'
        document.body.style.background = '#515154'
    }
}