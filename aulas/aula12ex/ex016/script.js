function verificar(){
    var agora = new Date()
    var anoAtual = agora.getUTCFullYear() // pega com 4 digitos ou seja 2022
    var res = document.querySelector('div#res')
    var Nasc = parseInt(document.getElementById("txtAno").value)
    if (Nasc == 0 || Nasc > anoAtual){
        alert('Verifique os dados digitados!')
    }else{
        var sex = document.getElementsByName("radSex")
        var idade = anoAtual - Nasc
        var gênero = ''
        // criando a tag img no js e colocando id
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            gênero = 'homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'menino.jpg')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'jovemM.jpg')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'sr.jpg')
            }
        } else{
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'menina.jpg')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'jovemF.jpg')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'sra.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}