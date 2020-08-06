function alturaArvoreUtopica(nCiclos) {
    var tamanho = 1;

    for(var i = 0; i <= nCiclos; i++){  
        if(i == 0) tamanho = 1;  
        if(i %2 == 0&& i != 0)tamanho+=1;  
        if(i % 2 != 0 && i != 0)tamanho*=2;  
    } 

    return tamanho;
}

console.log(alturaArvoreUtopica(0));
console.log(alturaArvoreUtopica(1));
console.log(alturaArvoreUtopica(2));
console.log(alturaArvoreUtopica(3));