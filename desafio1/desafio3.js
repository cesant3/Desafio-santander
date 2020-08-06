function fatorial(num) {
    var cont = num;
    var resultado = 1;
    for(let i = 0; i < num; i++) {
        resultado *= cont;
        cont--;
    }
    return resultado;
}

console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(5));