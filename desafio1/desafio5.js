function escada(altura = []) {
    var string = '#';
    var espaco = "";
    var conjuntoEscada = [];
    var cont = 1;
    for (let i = 0; i < altura; i++) {
        conjuntoEscada[i] = " ".repeat(altura - cont) + string[0].repeat(cont);
        cont++;
    }
    return conjuntoEscada;
}

console.log(escada(2));
console.log(escada(3));
console.log(escada(4));
console.log(escada(5));
console.log(escada(0));
console.log(escada(1));

