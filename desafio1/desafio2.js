function produto(num = []) {
    var multiplicacao = 1;
    for (let i = 0; i < num.length; i++) {
        multiplicacao *= num[i];
    }
    return multiplicacao;
}

console.log(produto([5, 5, 5]));