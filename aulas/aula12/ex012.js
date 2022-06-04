var idade = 16
/*if (idade >= 16  && idade < 18){
    console.log('Voto opcional!!')
}else{
    if (idade < 16){
        console.log('Não volta!')
    }else{
        console.log('Voto obrigatório')
    }
}*/

if (idade < 16){
    console.log('Não volta!')
} else if (idade < 18 || idade >= 65){ 
    console.log('Voto opcional!!')
} else {console.log('Voto obrigatório')}