var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
let valores = []

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('valor inválido ou já encontrado na lista.')
    }
    num.value = '' // limpar o número digitado
    num.focus() // deixar o cursor piscando, assim não precisa clicar para digitar
}

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalisar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        } 
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> O total de valores é ${tot}</p>`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores digitados foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados foi ${media}</p>`
    }
}