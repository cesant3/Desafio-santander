function maisMenos(arrayDeNumeros = []){
    
    var menorQueZero = 0;
    var maiorQueZero = 0;
    var igualAZero = 0;

    for (let i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] < 0) menorQueZero++;
        if(arrayDeNumeros[i] > 0) maiorQueZero++;
        if(arrayDeNumeros[i] == 0) igualAZero++;
    }

    var novoArray = [];
    novoArray[0] = maiorQueZero / arrayDeNumeros.length;
    novoArray[1] = igualAZero / arrayDeNumeros.length;
    novoArray[2] = menorQueZero / arrayDeNumeros.length;

    return novoArray;
    
}

console.log(maisMenos([1, 2, 0, -1]));