function contar(){
    let inicio = document.getElementById('txtI')
    let fim = document.getElementById('txtF')
    let passo = document.getElementById('txtP')
    let resp = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resp.innerHTML = 'impossível contar!'
        // window.alert('[ERRO] faltam dados')
    } else{
        resp.innerHTML = 'Contando: '
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
    }
    if (passo <= 0){
        alert('Passo inválido! considerando passo 1')
        passo = 1
    }
    if (i < f){
        // contagem crescente
        for(let c = i; c <= f; c += p){
            resp.innerHTML += `${c} \u{1f449}`
        }
    }else{
        // contagem regressiva
        for(let c = i; c >= f; c-= p){
            resp.innerHTML += `${c} \u{1f449} `
        }
    }
    resp.innerHTML += `\u{1f3c1}`
}