function calcularTabuada(){
    var n = document.getElementById('txtn')
    var res = document.getElementById('seltab')
    if (n.value.length == 0){
        alert('Por favor. Digitar um número')
    } else{
        num = Number(n.value)
        res.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${i} x ${num} = ${i*num}`
            res.appendChild(item)
        }
    }
}